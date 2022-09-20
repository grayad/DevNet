import React from "react";

const Jobform = () => {

  return (
    <>
      <main className="login">
        <div className="login-div text-center">
          <img src="/devnetlogo.jpg" alt="logo" className="login-logo" />
        </div>
        <h1 className="text-center">Welcome to DevNet</h1>
        <div className="col-12 col-md-6 mx-auto py-4">
          <div className="card">
            <h4 className="card-header">Login</h4>
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
                <select className="form-select" multiple aria-label="multiple select example">
                  <option selected>Select Skills</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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