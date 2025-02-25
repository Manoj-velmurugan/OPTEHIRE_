# OPTEHIRE - Resume Analysis and Feedback System

## Overview
OPTEHIRE is an open-source, AI-driven platform designed to assist job seekers in optimizing their resumes for specific job roles. By leveraging advanced AI models, OPTEHIRE provides position-specific feedback, including a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) and key metrics, to help users craft impactful resumes and discover relevant job opportunities. The system features a Flask-based backend API and a React-based frontend, offering a seamless, user-friendly experience for resume improvement and job matching.

## Features
- **Resume Upload**: Users can upload PDF, TXT, or DOCX resume files through an intuitive interface.
- **Position-Specific Feedback**: Generate tailored SWOT analysis and metrics (grammar score, hiring probability, skill coverage, ATS compatibility) for roles like Software Engineering, Data Science, or custom positions using AI models.
- **Feedback Display**: View detailed feedback in a points format, with a dashboard for metrics and a loader animation (using `react-loader-spinner`) during data fetching.
- **Job Listing Exploration**: Easily navigate to explore job listings via a dedicated button.
- **Timeout Handling**: Includes 10-second timeout protection for API requests, with user-friendly error messages.
- **Responsive UI**: Features a clean, modern layout designed with Tailwind CSS, including background images and responsive design.
- **CORS Support**: Backend supports CORS for `localhost:3000` and `localhost:5173`, enabling smooth frontend-backend communication.

## Installation
Follow these steps to set up OPTEHIRE on your local machine:

### Prerequisites
- **Python 3.8+** for the backend.
- **Node.js 14+** and **npm** for the frontend.
- Git for version control.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd optehire/backend/AI-DIY-Factory/Resume ATS Builder
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure environment variables in `.env` (e.g., API keys for AI models like `crewai` and `langchain-openai`).

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd optehire/frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Ensure Tailwind CSS is configured in your project (follow React Tailwind setup if not already included).

## Usage
### Running the Application
1. Start the backend server:
   ```bash
   python resume_swot_analyse.py
   ```
   The backend will run on `http://localhost:5000` by default.

2. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000` or `http://localhost:5173` (depending on your configuration).

### Example Workflow
- **Uploading a Resume**: Visit the frontend, click "Upload Resume," and select a PDF, TXT, or DOCX file.
- **Submitting a Job Role**: Specify a role (e.g., "Web Development") and click "Submit Role" to generate feedback.
- **Fetching Feedback**: Wait for the loader to complete, then view the SWOT analysis and metrics on the feedback dashboard.
- **Exploring Jobs**: Click "Explore Jobs" to navigate to job listings.

## Project Structure
### Backend
Located at `c:\Users\SEC\Desktop\optehire\backend\AI-DIY-Factory\Resume ATS Builder\`, the backend includes:
- `resume_swot_analyse.py`: Main Flask API file for processing resumes and generating feedback.
- `agents.py`, `receiver.py`, `tasks.py`, `utils.py`: Supporting Python scripts for AI logic and utilities.
- `requirements.txt`: Dependency list.
- `data/`, `db/`: Directories for data storage and databases.
- `.env`: Environment configuration.

### Frontend
Located at `c:\Users\SEC\Desktop\optehire\frontend\src\pages\`, the frontend includes:
- `feedback.jsx`: Main React component for displaying feedback and metrics.
- `explorejobs.jsx`, `Home.jsx`, `landing.jsx`: Pages for job exploration, home, and landing.
- `assets/`: Directory for UI images (e.g., background images, loader animations).
- `components/`: Reusable React components (e.g., `CommonNavbar.jsx`, `footer.jsx`).
- `public/`, `src/`: Standard React project structure with Tailwind CSS styling.

## Technologies
- **Backend**: Python, Flask, `crewai`, `langchain-openai`, `flask-cors`.
- **Frontend**: React, Tailwind CSS, `react-loader-spinner`.
- **Other**: Git for version control, Node.js, npm.

## Contributors

### Frontend Development
**Manoj MV** - Responsible for building and maintaining the React-based user interface.

### UI/UX Design
**Aparna RB** - Designed the responsive, user-friendly interface with Tailwind CSS and modern styling.

### AI Development
**Vijis Durai R** - Developed the AI-driven backend logic using CrewAI and LangChain OpenAI for resume analysis and feedback generation.

### Job Fetching
**Dinesh Kumaraa K** - Implemented the job listing exploration feature, enabling users to discover relevant opportunities.

## Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/8e841d19-bdac-4c2d-9b36-c54ce87814be)

### Authentication Page
![Clerk Authentication](https://github.com/user-attachments/assets/92adffa9-2f2f-413a-a8cb-8abfcbea22b6)

### User Dashboard
![Signed Clerk Page](https://github.com/user-attachments/assets/9bab3cb7-e997-4a62-af4c-358d9443ec86)

### Home Page
![Home Page - Overview](https://github.com/user-attachments/assets/19fdde68-3f68-47ce-9c6a-3cb95dfe6126)
![Home Page - Key Features](https://github.com/user-attachments/assets/07ff26f8-8193-4b56-a340-56b9ff58f9ef)
![Home Page - User Testimonials](https://github.com/user-attachments/assets/04a7ab81-ae34-472c-8d7c-16de2a8bf634)

### Job Exploration Pages
![Explore Jobs - Job Listings](https://github.com/user-attachments/assets/b19ad2b5-69a0-4e6c-be57-80de29ef664a)
![Explore Jobs - Search Interface](https://github.com/user-attachments/assets/476f4cf7-11a4-4796-bd09-837467f95173)

### Feedback Page
![Feedback Page - Resume Upload](https://github.com/user-attachments/assets/f5e657e7-aacc-4720-9581-7298b01bfd54)
![Feedback Page - Detailed Analysis](https://github.com/user-attachments/assets/010ffbbe-16b1-40ca-b0c2-1e82bbce70b9)

### Backend AI Process
![Backend AI Processing](https://github.com/user-attachments/assets/623d1544-37eb-4fce-8e72-47acc4e882c3)
