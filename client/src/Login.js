import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import React, { useState } from "react";
// import Loading from "./Loading";

function Login({ login }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <br />
          <br />
          <h1
            style={{ display: "block", margin: "auto", width: "fit-content" }}
          >
            Please log in!
          </h1>
          <br />
          <LoginForm login={login} />
          <br />
          <div
            style={{ display: "block", margin: "auto", width: "fit-content" }}
          >
            <p>
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
          <br />
          <br />
          <h1
            style={{ display: "block", margin: "auto", width: "fit-content" }}
          >
            Please sign up!
          </h1>
          <br />
          <SignUpForm login={login} />
          <br />
          <div
            style={{ display: "block", margin: "auto", width: "fit-content" }}
          >
            <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
