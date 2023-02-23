import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import Loading from "./Loading";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("isAdmin", true);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          dispatch(userActions.setUser(user));
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33%",
          margin: "auto",
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit" style={{ marginTop: 10 }}>
          {isLoading ? <Loading /> : "Sign Up"}
        </button>
        {errors.map((err) => (
          <h3 key={err} className="errors">
            {err}
          </h3>
        ))}
      </form>
    </div>
  );
}

export default SignUpForm;
