import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { ADD_CONNECTION } from "../../utils/mutations";

const Developers = () => {
  // use useQuery hook to make query request for all users
  const { loading: usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const users = usersData?.users;

  // use addConnection mutation
  const [addConnection] = useMutation(ADD_CONNECTION);

  //   if user is not logged in, redirect page to login
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // function on "connect" button click
  const handleClick = async (e) => {
    e.preventDefault();

    // get element attribute -- developer id
    let DevId = e.target.getAttribute("dev-id");

    try {
      await addConnection({
        variables: { connectionId: DevId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1 className="text-center">Welcome to the Developer Feed!</h1>
      <h2 className="text-center">Meet all of the developers on DevNet.</h2>
      <div className="col-12 col-md-6 mx-auto py-4">
        <div className="card">
          <h3 className="card-header">Developers</h3>
          <div className="card-body">
            {usersLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="developers-list">
                {users
                  .filter((user) => user.type === "Developer")
                  .map((Developer) => (
                    <div className="card mb-3" key= {Developer.id}>
                      <p className="card-header">{Developer.username} </p>
                      <div className="card-body">
                        <p>
                          Title:{" "}
                          {Developer.title ? Developer.title : "No title yet"}
                        </p>
                        <p>
                          Bio: {Developer.bio ? Developer.bio : "No bio yet"}
                        </p>
                        <div className="d-flex align-items-center">
                          <p>Skills:</p>{" "}
                          {Developer.skills
                            ? Developer.skills.map((skill) => (
                                <p className="p-1" key={skill}>{skill},</p>
                              ))
                            : "No skills yet"}
                        </div>
                        <div className="d-flex justify-content-end">
                          {/* wrap button in link to user profile */}
                          <Link to={"/profile/" + Developer.username}>
                            <button className="m-2 p-1 button-59">See Profile</button>
                          </Link>
                          <button
                            className="m-2 p-1 button-59"
                            dev-id={Developer._id}
                            onClick={handleClick}
                          >
                            Connect
                          </button>
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

export default Developers;
