import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import SearchBar from "./exploresb";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8001/jobs/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched jobs:", data.results);
        // Map API fields to match JobCard props
        const mappedJobs = data.results.map((job) => ({
          title: job.title,
          company: job.company,
          location: job.location,
          jobType: job.job_type, // Rename job_type to jobType
          posted: job.posted,
          salary: job.salary,
          applyLink: job.job_url, // Rename job_url to applyLink
        }));
        setJobs(mappedJobs);
        setFilteredJobs(mappedJobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase()) ||
          job.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  };

  if (loading) return <p className="text-center text-lg">Loading jobs...</p>;

  return (
    <section className="py-16 bg-transparent min-h-screen">
      <div className="container mx-auto px-6">
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => <JobCard key={index} {...job} />)
          ) : (
            <p className="text-center col-span-3">
              {searchQuery ? "No jobs match your search" : "No jobs found"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobList;