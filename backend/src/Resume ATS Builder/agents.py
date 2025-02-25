# Agents
# 1. Job Requirements Researcher
# 2. Resume SWOT Analyser
# 3. ATS Score Analyzer

## Importing the dependencies
from crewai import Agent
from crewai_tools import SerperDevTool, WebsiteSearchTool

search_tool = SerperDevTool()
web_rag_tool = WebsiteSearchTool()

# Create agents which use these tools
def agents(llm):
    '''
    Has three agents:
    1. job_requirements_researcher - Uses search_tool, web_rag_tool
    2. resume_swot_analyser - Analyzes SWOT with min 5 points each
    3. ats_score_analyzer - Evaluates ATS compatibility
    '''
    job_requirements_researcher = Agent(
        role='Market Research Analyst',
        goal='Provide a concise report on current job requirements, skills, and notable projects for a specified role.',
        backstory='An expert analyst with a keen eye for market trends and job market demands.',
        tools=[search_tool, web_rag_tool],
        verbose=True,
        llm=llm,
        max_iters=1
    )
    
    resume_swot_analyser = Agent(
        role='Resume SWOT Specialist',
        goal='Perform a detailed SWOT analysis (minimum 5 points per category) on a resume based on job requirements, returning a JSON report with match percentage and suggestions.',
        backstory='A seasoned hiring expert skilled in evaluating a single resume against industry standards, adept at identifying candidate names and generating clean JSON.',        
        verbose=True,
        llm=llm,
        max_iters=1,
        allow_delegation=True
    )
    
    ats_score_analyzer = Agent(
        role='Resume Dashboard Evaluator',
        goal='Evaluate a resume for a specified job to generate unique dashboard metrics: grammar score, hiring probability, skill coverage, and ATS compatibility, each as a percentage.',
        backstory='An expert in resume analysis and ATS systems, specializing in generating concise dashboard metrics.',
        tools=[search_tool],  # Optional: for additional job-specific data
        verbose=True,
        llm=llm,
        max_iters=1
    )
    
    return job_requirements_researcher, resume_swot_analyser, ats_score_analyzer