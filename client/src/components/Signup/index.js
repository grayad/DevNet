import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';


const Signup = () => {
    const [userFormData, setuserFormData] = useState({
        username: '',
        email: '',
        password: '',
        radio: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setuserFormData({
      ...userFormData,
      [name]: value,
    });

    console.log(userFormData)
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
		<main className="login">
            <h1 className="text-center">Welcome to DevNet</h1>
            <div className="col-12 col-md-6 mx-auto py-4">
                <div className="card">
                    <h4 className="card-header">Sign-Up</h4>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className="form-input"
                                placeholder="Your username"
                                name="username"
                                type="username"
                                id="username"
                                value={userFormData.username}
                                onChange={handleChange}
                            />
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
                            <h2 className="text-center"> Are you a Developer or a Company?</h2>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="devRadio"
                                    value="Developer"
                                    onChange={handleChange}>
                                </input>
                                <label className="form-check-label" for="devRadio">
                                Developer
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="compRadio"
                                    value="Company"
                                    onChange={handleChange}>
                                </input>
                                <label className="form-check-label" for="compRadio">
                                Company
                                </label>
                            </div>
                            <div class="text-center py-3">
                                <button type="submit" className="btn btn-primary btn-dark">Submit</button>
                            </div>
                            {error && <div>Signup failed</div>}
                        </form>
                    </div>
                </div>
            </div>
        </main>
	);
}

export default Signup;