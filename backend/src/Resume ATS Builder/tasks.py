# Tasks - Find the Job Requirements, Resume Swot Analysis
from crewai import Task
from agents import agents

def tasks(llm, job_desire, resume_content):
    '''
    job_requirements_research - Identify skills, projects, and experience
    resume_swot_analysis - Perform SWOT analysis with match percentage
    ats_score_checker - Check ATS compatibility with keywords
    '''

    job_requirements_researcher, resume_swot_analyser, ats_score_analyzer= agents(llm)

    research = Task(

        description=f'For Job Position of Desire: {job_desire} research to identify the current market requirements for a person at the job including the relevant skills, some unique research projects or common projects along with what experience would be required. For searching query use ACTION INPUT KEY as "search_query"',
        expected_output='A report on what are the skills required and some unique real time projects that can be there which enhances the chance of a person to get a job',
        agent=job_requirements_researcher
    )

    resume_swot_analysis = Task(

        description=f'Resume Content: {resume_content} \n Analyse the resume provided and the report of job_requirements_researcher to provide a detailed SWOT analysis report on the resume along with the Resume Match Percentage and Suggestions to improve',
        expected_output='A JSON formatted report as follows: {"candidate": [candidate], "strengths":[strengths], "weaknesses":[weaknesses], "opportunities":[opportunities], "threats":[threats], "resume_match_percentage": resume_match_percentage, "suggestions": [suggestions]}',
        agent=resume_swot_analyser,
        output_file='resume-report/resume_review.json',
        dependencies=[research]
    )
    
    '''
    resume_swot_analysis = Task(
        description=f'Resume Content: {resume_content}\nAnalyse the resume provided and the report of job_requirements_researcher to provide a detailed SWOT analysis report on the resume along with the Resume Match Percentage and Suggestions to improve',
        expected_output='{"candidate": [], "strengths": [], "weaknesses": [], "opportunities": [], "threats": [], "resume_match_percentage": 0, "suggestions": []}',  # Pure JSON string
        agent=resume_swot_analyser,
        output_file='resume-report/resume_review.json',
        dependencies=[research]
    )
    '''
    
    ats_score_checker = Task(
        description=f'Evaluate resume for {job_desire} with content: {resume_content} to generate dashboard metrics. Use "search_query" if needed.',
        expected_output='JSON: "grammar_score": <int>%, "hiring_probability": <int>%, "skill_coverage": <int>%, "ats_compatibility": <int>%',
        agent=ats_score_analyzer
    )
    return research, resume_swot_analysis , ats_score_checker