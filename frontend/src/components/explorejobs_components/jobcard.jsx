import React from "react";

const JobCard = ({ title, company, location, jobType, posted, salary, applyLink }) => {
  return (
    <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 backdrop-blur-lg border border-gray-200 hover:-translate-y-2 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 font-semibold">{company}</p>
      <p className="text-gray-500">{location} • {jobType}</p>
      <p className="text-gray-400 text-sm">Posted: {posted}</p>
      {salary && <p className="text-green-600 font-medium">Salary: {salary}</p>}
      <a 
        href={applyLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block mt-auto bg-black text-white py-2 px-4 rounded-md text-center hover:bg-blue-400"
      >
        Apply Here
      </a>
    </div>
  );
};

export default JobCard;