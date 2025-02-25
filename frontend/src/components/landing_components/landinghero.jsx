import React from "react";
import resume from "../../assets/resume.png"; // Your image
import search from "../../assets/searchbar.png"

const LandingHero = () => {
  return (
    <section className="bg-transparent text-white text-center py-10 m-0 w-full mt-10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-black">Smart Resumes, Better Opportunities</h1>
          <p className="text-lg mb-6 mt-5 text-black">
            Leveraging AI to help graduates craft impactful resumes and match with ideal job opportunities effortlessly.
          </p>

          {/* Image in place of RotatingText */}
          <div className="-ml-3 w-100 -mt-2">
            <img 
              src={search}  // Replace with the actual path of your image
              alt="Image Description"
              className="w-64 h-auto mt-6" // You can adjust the size here
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 pl-40">
          <img
            src={resume} // Replace with the actual path to your PNG
            alt="Career Opportunities"
            className="w-80 h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
