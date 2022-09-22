import React from "react";
import { ADD_JOB } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';




const Jobform = () => {
  const [addJob] = useMutation(ADD_JOB);



  const handleClick = async () => {
    try {
      await addJob({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  // update state based on form input changes
  const handleChange = (event) => {
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main className="addjob">
        <div className="col-12 col-md-6 mx-auto py-4">
          <div className="card">
            <h4 className="card-header">Add a Job</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your company"
                  name="company"
                  type="company"
                  id="company"
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Description"
                  name="description"
                  type="description"
                  id="description"
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your skills (Ex. HTML, CSS, JavaScript)"
                  name="bio"
                  type="bio"
                  id="bio"
                  onChange={handleChange}
                />
                <div className="text-center py-3">
                  <button type="submit" className="btn btn-primary btn-dark" onClick={handleClick}>
                      Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Jobform;