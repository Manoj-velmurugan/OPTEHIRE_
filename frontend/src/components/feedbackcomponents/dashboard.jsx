import React from 'react';

const Dashboard = ({ metrics }) => {
  if (!metrics) {
    return (
      <div className="bg-white bg-opacity-40 p-5 rounded-lg w-96 h-40 flex items-center justify-center">
        <p className="text-gray-600">No metrics available. Upload a resume and submit a role to see results.</p>
      </div>
    );
  }

  const metricsData = [
    { label: 'Grammar Score', value: metrics.grammar_score || 0 },
    { label: 'Hiring Probability', value: metrics.hiring_probability || 0 },
    { label: 'Skill Coverage', value: metrics.skill_coverage || 0 },
    { label: 'ATS Compatibility', value: metrics.ats_compatibility || 0 },
  ];

  return (
    <div className="bg-white bg-opacity-40 p-5 rounded-lg w-96">
      {metricsData.map((metric, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between text-gray-700 mb-1">
            <span>{metric.label}</span>
            <span>{metric.value}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${metric.value}%` }} // Fixed syntax: use backticks for string interpolation
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;