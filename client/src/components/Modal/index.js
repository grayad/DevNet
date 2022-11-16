import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../utils/mutations";

function Modal() {
  const [updateUser] = useMutation(UPDATE_USER);

  //   set form state
  const [userFormData, setuserFormData] = useState({
    bio: user.bio,
    skills: user.skills,
    type: user.type,
  });

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
    // JSX
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Edit Profile</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="col-12 col-md-6 mx-auto py-4">
            <div className="card">
              <h4 className="card-header">Fill out the below.</h4>
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
        <button type="button">Close</button>
      </div>
    </div>
  );
}

export default Modal;
