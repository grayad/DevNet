import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../../utils/mutations";

const Jobform = () => {
  const [jobFormData, setjobFormData] = useState({
    companyName: "",
    hiringEmail: "",
    jobTitle: "",
    jobDescription: "",
    skills: "",
  });

  const [addJob] = useMutation(ADD_JOB);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setjobFormData({
      ...jobFormData,
      [name]: value,
    });
  };

  const clearFormData = () => {
    setjobFormData({
      companyName: "",
      hiringEmail: "",
      jobTitle: "",
      jobDescription: "",
      skills: "",
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addJob({
        variables: { ...jobFormData },
      });

      console.log(data);
      clearFormData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main className="addjob">
      <h1 className="text-center">Add a Job</h1>
        <div className="col-12 col-md-6 mx-auto py-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your company"
                  name="companyName"
                  type="companyName"
                  id="companyName"
                  value={jobFormData.companyName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Contact Email"
                  name="hiringEmail"
                  type="hiringEmail"
                  id="hiringEmail"
                  value={jobFormData.hiringEmail}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Job Title"
                  name="jobTitle"
                  type="jobTitle"
                  id="jobTitle"
                  value={jobFormData.jobTitle}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Job Description"
                  name="jobDescription"
                  type="jobDescription"
                  id="jobDescription"
                  value={jobFormData.jobDescription}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Job skills (Ex. HTML, CSS, JavaScript)"
                  name="skills"
                  type="skills"
                  id="skills"
                  value={jobFormData.skills}
                  onChange={handleChange}
                />
                <div className="text-center py-3">
                  <button type="submit" className="btn btn-primary btn-dark">
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