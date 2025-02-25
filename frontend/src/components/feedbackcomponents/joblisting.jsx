import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobListingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/explorejobs');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 w-15"
    >
      Explore Job Listings
    </button>
  );
};

export default JobListingButton;