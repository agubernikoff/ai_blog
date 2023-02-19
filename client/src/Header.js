import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminControls from "./AdminControls";

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
    <div>
      <h1
        onClick={(e) => {
          handleClick(e);
        }}
        style={{ cursor: "pointer" }}
      >
        Thy Eschalot
      </h1>
      {user ? <AdminControls logout={logout} /> : null}
    </div>
  );
}

export default Header;
