// import React from 'react';
import React, { useState } from "react";
import { Navigate, useParams } from 'react-router-dom';

import ConnectionList from '../ConnectionList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USERS, QUERY_ME } from '../../utils/queries';
import { ADD_USER, UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();
  const [addUser] = useMutation(ADD_USER);
  const { loading, data } = useQuery(userParam ? QUERY_USERS : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // console.log("***", user)

  const [userFormData, setuserFormData] = useState({
    bio: user.bio,
    skills: user.skills,
    type: user.type,
  });

  const [updateUser] = useMutation(UPDATE_USER);

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
      await addUser({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setuserFormData({
      ...userFormData,
      [name]: value,
    });
  };



  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateUser({
        variables: { ...userFormData },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Connection
          </button>
        )}
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="col-12 col-md-6 mx-auto py-4">
          <div className="card">
            <h4 className="card-header">Update-Profile</h4>
            <div className="card-body">
              <input
                className="form-input"
                placeholder="Your Title"
                name="title"
                type="title"
                id="title"
                value={userFormData.title}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your Bio"
                name="bio"
                type="bio"
                id="bio"
                value={userFormData.bio}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your skills (Ex: HTML, CSS, JavaScript)"
                name="skills"
                type="skills"
                id="skills"
                value={userFormData.skills}
                onChange={handleChange}
              />
            </div>
            <div className="text-center py-3">
              <button type="submit" className="btn btn-primary btn-dark">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {user.username && (
        <>
          <div className="col-12 col-md-9 mx-auto py-4">
              <div className="card">
                <h4 className="card-header">Your-Profile</h4>
                <div className="card-body">
                  <h4>Username: {user?.username}</h4>
                  <h4>Type: {user?.type}</h4>
                  <h4>Title: {user?.title}</h4>
                  <h4>Bio: {user?.bio}</h4>
                  <h4>Skills: {user?.skills}</h4>
                </div>
              </div>
            <div className="col-12 col-lg-12 mb-3">
              <ConnectionList
                username={user?.username}
                connectionCount={user?.connectionCount}
                connections={user?.connections}
              />
            </div>
          </div>
          <div className="mb-3">{!userParam}</div>
        </>
      )}
    </div>
  );
};

export default Profile;
