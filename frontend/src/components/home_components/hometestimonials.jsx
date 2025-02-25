import React from 'react';
import testimonialImage from '../../assets/testimonials.png'; // Replace with actual image path

const HomeTesti = () => {
  return (
    <section className="py-16 bg-transparent flex flex-col items-center">
      {/* Centered Heading */}
      <h2 className="text-3xl font-bold mb-12 text-center w-full">
        What Our Users Say
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Testimonials */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-white ml-20 hover:-translate-y-4 transition duration-300 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white flex items-center gap-4">
            <img src="https://i.pravatar.cc/100" alt="User" className="w-12 h-12 rounded-full border border-gray-300" />
            <div>
              <p>"This platform helped me build a professional resume that landed me a job in just a few weeks!"</p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
          </div>

          <div className="bg-white ml-20 hover:-translate-y-4 transition duration-300 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white flex items-center gap-4">
            <img src="https://i.pravatar.cc/200" alt="User" className="w-12 h-12 rounded-full border border-gray-300" />
            <div>
              <p>"AI-driven feedback was a game changer! My resume has never looked better."</p>
              <p className="mt-4 font-semibold">- Jane Smith</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={testimonialImage} alt="User Testimonials" className="w-80 h-auto ml-20" />
        </div>
      </div>
    </section>
  );
};

export default HomeTesti;
