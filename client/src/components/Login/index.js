import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Signup from "../Signup";

import Auth from "../../utils/auth";

const Login = () => {
  const [userFormData, setuserFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

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
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={userFormData.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={userFormData.password}
                  onChange={handleChange}
                />
                <div className="text-center py-3">
                  <button type="submit" className="btn btn-primary btn-dark">
                    Submit
                  </button>
                </div>
                {error && <div>Login failed</div>}
                <p>Don't have an account? <a href={<Signup></Signup>}>Sign up</a></p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
