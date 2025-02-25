import React from 'react';
import { FaRegFileAlt, FaBriefcase } from 'react-icons/fa'; // Import icons

const HomeFeatures = () => {
  return (
    <section className="py-16 bg-transparent flex justify-center items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* AI-Powered Feedback Feature */}
          <div className="bg-white bg-opacity-10 border-2 border-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 backdrop-blur-lg hover:-translate-y-4 ml-40 mr-10 flex items-center gap-4">
            <FaRegFileAlt className="text-7xl text-black" /> {/* Resume Analysis Icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">AI-Powered Feedback</h3>
              <p>Get instant resume feedback powered by AI to help you improve your chances.</p>
            </div>
          </div>
          
          {/* Easy Job Search Feature */}
          <div className="bg-white bg-opacity-20 border-2 border-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 backdrop-blur-lg hover:-translate-y-4 mr-40 ml-10 flex items-center gap-4">
            <FaBriefcase className="text-7xl text-black" /> {/* Job Listing Icon */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Easy Job Search</h3>
              <p>Explore job listings that align with your skills and career goals.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
