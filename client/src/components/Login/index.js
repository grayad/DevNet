import React from "react";

const Login = () => {
  return (
		<main className='login'>
            <h1 class="text-center">Welcome to DevNet</h1>
            <div className="col-12 col-md-6 mx-auto">
                <div className="card">
                    <h4 className="card-header">Login/Sign-Up</h4>
                    <div className="card-body">
                        <form>
                        <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            id="email"

                        />
                        <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                        />
                        </form>
                        <h2 class="text-center"> Are you a Developer or a Company?</h2>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="radio"
                                id="devRadio"
                                value="option1"
                                checked>
                            </input>
                            <label class="form-check-label" for="devRadio">
                            Developer
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="radio"
                                id="compRadio"
                                value="option2">
                            </input>
                            <label class="form-check-label" for="compRadio">
                            Company
                            </label>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
	);
}

export default Login;