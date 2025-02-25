import React from 'react';

const FeedbackDisplay = ({ feedback, swotAnalysis }) => {
  // Function to format SWOT analysis into points
  const formatSwotAnalysis = (swot) => {
    if (!swot || typeof swot !== 'object') return null;

    return (
      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-800">SWOT Analysis</h4>
        <ul className="list-disc pl-5 text-gray-700">
          {Object.entries(swot).map(([key, value]) => (
            <li key={key} className="mb-2">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {Array.isArray(value) ? value.join(', ') : value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white bg-opacity-40 p-5 rounded-lg w-full h-auto max-h-[80vh] overflow-y-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Feedback</h3>
      {feedback && (
        <ul className="list-disc pl-5 text-gray-700">
          {feedback.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {formatSwotAnalysis(swotAnalysis)}
      {!feedback && !swotAnalysis && (
        <p className="text-gray-600">No feedback available. Upload a resume and submit a role to see results.</p>
      )}
    </div>
  );
};

export default FeedbackDisplay;
