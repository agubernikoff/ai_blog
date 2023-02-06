import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function LoginForm({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          login(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
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
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button variant="fill" type="submit" style={{ marginTop: 10 }}>
        {isLoading ? <Loading /> : "Login"}
      </button>
      {errors.map((err) => (
        <h3 key={err} className="errors">
          {err}
        </h3>
      ))}
    </form>
  );
}

export default LoginForm;
