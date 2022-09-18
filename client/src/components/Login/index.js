import React from "react";


const Login = () => {
  return (
		<main className='login'>
            <h1 class="text-center">Welcome to DevNet</h1>
            <div className="col-12 col-md-6 mx-auto py-4">
                <div className="card">
                    <h4 className="card-header">Sign-Up</h4>
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
                        <div class="text-center py-3">
                            <button type="submit" class="btn btn-primary btn-dark">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
	);
}

export default Login;