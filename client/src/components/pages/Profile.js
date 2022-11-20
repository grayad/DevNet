// import React from 'react';
import React from "react";
import { Navigate, useParams } from "react-router-dom";

import ConnectionList from "../ConnectionList";
import Modal from "../Modal";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLEUSER, QUERY_ME } from "../../utils/queries";
import { ADD_CONNECTION } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();
  const [addConnection] = useMutation(ADD_CONNECTION);
  const { loading, data } = useQuery(userParam ? QUERY_SINGLEUSER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log("***", user.connectionCount);

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = async () => {
    try {
      await addConnection({
        variables: { connectionId: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const openModal = () => {
    return <Modal></Modal>
  }

  return (
    <main>
      <div className="flex-row mb-3">
        <h2 className="text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        {userParam ? `` : (<button className="btn" onClick={openModal}>Edit Profile</button>)}

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Connection
          </button>
        )}
      </div>

      {/* profile information */}
      {user.username && (
        <>
          <div className="col-12 col-md-9 mx-auto py-4">
            <div className="card">
              <h4 className="card-header">{userParam ? `${user.username}'s ` : "Your "}Profile</h4>
              <div className="card-body">
                <h4>Username: {user?.username}</h4>
                <h4>Type: {user?.type}</h4>
                <h4>Title: {user?.title}</h4>
                <h4>Bio: {user?.bio}</h4>
                <h4>
                  Skills:{" "}
                  {user?.skills.map((skill, index) => (
                    <p className="p-1" key={index}>- {skill}</p>
                  ))}
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-12 mb-3">
              <ConnectionList
                username={user?.username}
              />
            </div>
          </div>
          <div className="mb-3">{!userParam}</div>
        </>
      )}

      {/* form */}
      {/* {userParam ? (
          ""
        ) : () } */}
    </main>
  );
};

export default Profile;
