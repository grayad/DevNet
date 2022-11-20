import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../../utils/queries";
import Auth from "../../utils/auth";

const Jobs = () => {
  // use useQuery hook to make query request for all users
  const { loading, data } = useQuery(QUERY_JOBS);

  const jobs = data?.jobs;

  //   if user is not logged in, redirect page to login
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  console.log(jobs);

  return (
    <main>
      <h1 className="text-center">Welcome to the Job Page!</h1>
      <h2 className="text-center">Find the perfect fit.</h2>
      <div className="col-12 col-md-6 mx-auto py-4">
        <div className="card">
          <h3 className="card-header">Available Positions</h3>
          <div className="card-body">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="jobs-list">
                {jobs.map((job) => (
                  <div className="card mb-3">
                    <p className="card-header">{job.jobTitle} </p>
                    <div className="card-body">
                      <p>
                        Company Name:{" "}
                        {job.companyName
                          ? job.companyName
                          : "No company name yet"}
                      </p>
                      <p>
                        Job Description:{" "}
                        {job.jobDescription
                          ? job.jobDescription
                          : "No job description yet"}
                      </p>
                      <div className="d-flex align-items-center">
                        <p>Required Skills:</p>{" "}
                        {job.skills
                          ? job.skills.map((skill) => (
                              <p className="p-1">{skill},</p>
                            ))
                          : "No required skills yet"}
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="m-2 p-1">Delete Job</button>
                        <a href="mailto:"{...job.hiringEmail}>
                          <button className="m-2 p-1">Contact</button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
