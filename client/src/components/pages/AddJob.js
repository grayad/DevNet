import React from "react";

const Jobform = () => {

  return (
    <>
      <main className="addjob">
        <div className="col-12 col-md-6 mx-auto py-4">
          <div className="card">
            <h4 className="card-header">Add a Job</h4>
            <div className="card-body">
              <form>
                <input
                  className="form-input"
                  placeholder="Your company"
                  name="company"
                  type="company"
                  id="company"
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                />
                <input
                  className="form-input"
                  placeholder="Description"
                  name="description"
                  type="description"
                  id="description"
                />
                <input
                  className="form-input"
                  placeholder="Your skills (Ex. HTML, CSS, JavaScript)"
                  name="bio"
                  type="bio"
                  id="bio"
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