import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [pressedButton, setPressedButton] = useState(null);

  const nav = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", (e) => setPressedButton(e.key));
    document.addEventListener("keyup", (e) => setPressedButton(null));
  }, []);

  function handleClick(e) {
    if (pressedButton === "Meta") nav("/login");
  }

  return (
    <div>
      <h1
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Thy Eschalot
      </h1>
    </div>
  );
}

export default Header;
