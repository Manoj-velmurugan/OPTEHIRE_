import React, { useState } from 'react';

const UploadSection = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = [
        'application/pdf', // .pdf
        'text/plain', // .txt
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
      ];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        onUpload(selectedFile); // Pass file to parent
      } else {
        alert('Please upload a .pdf, .txt, or .docx file');
      }
    }
  };

  return (
    <div className="bg-white bg-opacity-40 p-5 rounded-lg w-96">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Resume</h3>
      <input
        type="file"
        accept=".pdf,.txt,.docx"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
};

export default UploadSection;
