from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import json
import re
from crewai import Crew, Process
from dotenv import load_dotenv, find_dotenv
from langchain_openai import ChatOpenAI
from utils import *  # Ensure read_all_pdf_pages is defined
from agents import agents
from tasks import tasks
import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)
app = Flask(__name__)
CORS(app, resources={r"/upload": {"origins": ["http://localhost:3000", "http://localhost:5173"]},
    r"/analyze": {"origins": ["http://localhost:3000", "http://localhost:5173"]},
    r"/feedback": {"origins": ["http://localhost:3000", "http://localhost:5173"]}})

# Load environment variables

load_dotenv(find_dotenv())
# Configuration
os.environ["SERPER_API_KEY"] = " " # Replace with your Serper API Key
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.2, api_key=" ") # Replace with your OpenAI API Key

UPLOAD_FOLDER = 'uploads'
RESUME_REPORT_FOLDER = 'resume-report'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESUME_REPORT_FOLDER, exist_ok=True)

# Function to extract candidate name from resume content
def extract_candidate_name(resume_content):
    # Simple regex to find names (looks for capitalized words near "Name", "Resume", or at the start)
    if not resume_content or resume_content.strip() == "":
        return "User"
    
    # Try to find a name using regex (basic pattern for names like "John Doe")
    name_pattern = r'(?:Name|Resume\s*of)\s*([A-Z][a-z]+\s*[A-Z][a-z]+)'
    match = re.search(name_pattern, resume_content, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    
    # Fallback: Use LLM to extract name if regex fails
    try:
        response = llm.invoke(f"Extract the candidate's full name from this resume text, or return 'User' if no name is found: {resume_content}")
        name = response.content.strip()
        if name and name.lower() != "user":
            return name
    except Exception as e:
        print(f"Error using LLM to extract name: {e}")
    
    return "User"

# Handle resume upload (POST /upload) - Replace old resume with new one
@app.route('/upload', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({"error": "No resume file provided"}), 400
    
    file = request.files['resume']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400
    
    # Validate file type
    valid_types = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if file.content_type not in valid_types:
        return jsonify({"error": "Invalid file type. Please upload .pdf, .txt, or .docx"}), 400
    
    # Save as a fixed filename, overwriting any existing resume
    file_extension = os.path.splitext(file.filename)[1]  # Gets .pdf, .txt, or .docx
    fixed_filename = "resume" + file_extension  # e.g., resume.pdf
    file_path = os.path.join(UPLOAD_FOLDER, fixed_filename)
    file.save(file_path)
    
    # Read and validate resume content
    try:
        resume_content = read_all_pdf_pages(file_path)
        if not resume_content or resume_content.strip() == "":
            return jsonify({"error": "Resume content is empty or unreadable"}), 400
    except Exception as e:
        return jsonify({"error": f"Error reading resume: {str(e)}"}), 400
    
    print(f"Received and replaced resume: {fixed_filename}")
    return jsonify({"message": "Resume uploaded successfully"})

# Handle position submission (POST /analyze) - No upload_id needed, extract name from resume
@app.route('/analyze', methods=['POST'])
def analyze_resume():
    data = request.get_json()
    position = data.get('position')
    if not position:
        return jsonify({"error": "Position required"}), 400
    
    # Use the fixed resume file
    resume_path = os.path.join(UPLOAD_FOLDER, "resume.pdf")  # Default to .pdf
    if not os.path.exists(resume_path):
        for ext in ['.txt', '.docx']:
            alt_path = os.path.join(UPLOAD_FOLDER, f"resume{ext}")
            if os.path.exists(alt_path):
                resume_path = alt_path
                break
        if not os.path.exists(resume_path):
            return jsonify({"error": "No resume file found"}), 404
    
    try:
        resume_content = read_all_pdf_pages(resume_path)
        if not resume_content or resume_content.strip() == "":
            return jsonify({"error": "Resume content is empty or unreadable"}), 400
        
        # Extract candidate name from resume content
        
        job_requirements_researcher, resume_swot_analyser, ats_score_analyzer = agents(llm)
        research, resume_swot_analysis, ats_score_checker = tasks(llm, position, resume_content)
        
        crew = Crew(
            agents=[job_requirements_researcher, resume_swot_analyser, ats_score_analyzer],
            tasks=[research, resume_swot_analysis, ats_score_checker],
            verbose=0,
            process=Process.sequential
        )
        
        result = crew.kickoff()
        print(f"Analyzed resume for position: {position}")
        return jsonify({"message": "Analysis started successfully"})
    except Exception as e:
        return jsonify({"error": f"Error analyzing resume: {str(e)}"}), 500

# Handle feedback retrieval (GET /feedback) - No upload_id needed
@app.route('/feedback', methods=['GET'])
def get_feedback():
    resume_path = os.path.join(UPLOAD_FOLDER, "resume.pdf")  # Default to .pdf
    if not os.path.exists(resume_path):
        for ext in ['.txt', '.docx']:
            alt_path = os.path.join(UPLOAD_FOLDER, f"resume{ext}")
            if os.path.exists(alt_path):
                resume_path = alt_path
                break
        if not os.path.exists(resume_path):
            return jsonify({
                "error": "No resume file found",
                "swot": None,
                "metrics": {
                    "grammar_score": 0,
                    "hiring_probability": 0,
                    "skill_coverage": 0,
                    "ats_compatibility": 0
                }
            }), 404
    
    swot_path = os.path.join(RESUME_REPORT_FOLDER, 'resume_review.json')  # Fixed filename for SWOT
    if not os.path.exists(swot_path):
        return jsonify({
            "error": "Feedback not found",
            "swot": None,
            "metrics": {
                "grammar_score": 0,
                "hiring_probability": 0,
                "skill_coverage": 0,
                "ats_compatibility": 0
            }
        }), 404
    
    try:
        with open(swot_path, 'r') as f:
            swot = json.load(f)
        
        # Generate metrics based on resume content
        resume_content = read_all_pdf_pages(resume_path)
        metrics = {
            "grammar_score": 0,
            "hiring_probability": 0,
            "skill_coverage": 0,
            "ats_compatibility": 0
        }
        
        if resume_content and resume_content.strip():
            # Simple logic to estimate metrics (replace with actual analysis)
            metrics = {
                "grammar_score": 75,
                "hiring_probability": 50,
                "skill_coverage": 60,
                "ats_compatibility": 70
            }
        
        print(f"Retrieved feedback for resume: {os.path.basename(resume_path)}, metrics: {metrics}")
        return jsonify({
            "swot": swot,
            "metrics": metrics
        })
    except Exception as e:
        return jsonify({
            "error": f"Error fetching feedback: {str(e)}",
            "swot": None,
            "metrics": {
                "grammar_score": 0,
                "hiring_probability": 0,
                "skill_coverage": 0,
                "ats_compatibility": 0
            }
        }), 500

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8000)