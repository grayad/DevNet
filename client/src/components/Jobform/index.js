import React from "react";

const Jobform = () => {

  return (
    <>
      <main className="login">
        <div className="login-div text-center">
          <img src="/devnetlogo.jpg" alt="logo" className="login-logo" />
        </div>
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
                  placeholder="Your bio"
                  name="bio"
                  type="bio"
                  id="bio"
                />
                <input
                  className="form-input"
                  placeholder="Your skills (Ex. HTML, CSS, JavaScript)"
                  name="bio"
                  type="bio"
                  id="bio"
                />
                <button type="submit" className="btn btn-primary btn-dark">
                    Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Jobform;