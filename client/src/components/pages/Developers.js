import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
import Auth from "../../utils/auth";

const Developers = () => {
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
      <h1 className="text-center">Welcome to the Developer Feed!</h1>
      <h2 className="text-center">Meet all of the developers on DevNet.</h2>
      <div className="col-12 col-md-6 mx-auto py-4">
        <div className="card">
          <h3 className="card-header">Developers</h3>
          <div className="card-body">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="developers-list">
                {users
                  .filter((user) => user.type === "Developer")
                  .map((Developer) => (
                    <div className="card mb-3">
                      <p className="card-header">{Developer.username} </p>
                      <div className="card-body">
                        <p>
                          Title:{" "}
                          {Developer.title ? Developer.title : "No title yet"}
                        </p>
                        <p>
                          Bio:{" "}
                          {Developer.bio ? Developer.bio : "No bio yet"}
                        </p>
                        <div className="d-flex align-items-center">
                          <p>Skills:</p>{" "}
                          {Developer.skills
                            ? Developer.skills.map((skill) => (
                                <p className="p-1">{skill},</p>
                              ))
                            : "No skills yet"}
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

export default Developers;
