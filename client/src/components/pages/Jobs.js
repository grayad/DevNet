import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
// import { QUERY_JOBS } from "../../utils/queries";
import Auth from "../../utils/auth";

const Jobs = () => {
  // use useQuery hook to make query request for all users
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users;

  //   if user is not logged in, redirect page to login
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  console.log(users);

  return (
    <div>
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
                {users
                  .filter((user) => user.type === "Company")
                  .map((Company) => (
                    <div className="card mb-3">
                      <p className="card-header">{Company.username} </p>
                      <div className="card-body">
                        <p>
                          Company Name:{" "}
                          {Company.title ? Company.title : "No company name yet"}
                        </p>
                        <p>
                          Job Description:{" "}
                          {Company.bio ? Company.bio : "No job description yet"}
                        </p>
                        <div className="d-flex align-items-center">
                          <p>Required Skills:</p>{" "}
                          {Company.skills
                            ? Company.skills.map((skill) => (
                                <p className="p-1">{skill}</p>
                              ))
                            : "No required skills yet"}
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="m-2 p-1">See Profile</button>
                          <button className="m-2 p-1">Connect</button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
