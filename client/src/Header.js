import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import AdminControls from "./AdminControls";
import logo from "./assets/2.png";

function Header({ user, logout }) {
  const [pressedButton, setPressedButton] = useState(null);

  const nav = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", (e) => setPressedButton(e.key));
    document.addEventListener("keyup", (e) => setPressedButton(null));
  }, []);

  function handleClick(e) {
    if (pressedButton === "Meta" && !user) nav("/login");
    else nav("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={logo}
        alt="logo"
        onClick={(e) => {
          handleClick(e);
        }}
        style={{ cursor: "pointer", width: "10%", margin: "auto" }}
      />
      <Navbar />
      {user ? <AdminControls logout={logout} /> : null}
    </div>
  );
}

export default Header;
