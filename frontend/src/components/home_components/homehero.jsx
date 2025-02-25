import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-40">
      <div className="absolute inset-0 bg-transparent opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl font-extrabold mb-10 text-black ml-20 mr-20">
            Empowering Graduates with AI for Better Resumes & Job Matches
          </h1>
          <p className="text-xl mb-6">
            Leverage AI to craft impactful resumes and discover career opportunities effortlessly.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300" onClick={() => navigate("/generatefeedback")}>
              Generate Feedback
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"  onClick={() => navigate("/explorejobs")}>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
