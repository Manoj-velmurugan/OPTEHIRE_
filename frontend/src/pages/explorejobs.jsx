import React from "react";
import backgroundImage from "../assets/back.jpg";
import SearchBar from "../components/explorejobs_components/exploresb";
import Navbar from "../components/landing_components/navbar";
import JobList from "../components/explorejobs_components/joblist";
import CommonNavbar from "../components/CommonNavbar";

const ExploreJobs = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: "fixed" }}
      
    >
                <CommonNavbar/>
      <div className="container mx-auto px-6 flex-grow">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-black pt-16 text-center">Explore Jobs</h1>

        {/* Search Bar */}
        <JobList/>

        {/* Job Listings Section */}
        <div className="flex flex-col md:flex-row mt-8">
          {/* Filters on the Left */}
          <div className="md:w-1/4 w-full mb-6 md:mb-0">
            {/* <JobFilter /> */}
          </div>

          {/* Job Listings on the Right */}
          <div className="md:w-3/4 w-full">
            {/* <JobList /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreJobs;
