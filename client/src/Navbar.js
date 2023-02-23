import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          color: "rgb(232, 213, 253)",
          background: "rgb(40, 21, 65)",
        }
      : null;

  const topics = ["sports", "pop culture", "food", "nonsense"];

  const mappedTopics = topics.map((topic) => (
    <NavLink to={`/topic/${topic}`} style={activeStyle} key={topic}>
      {topic}
    </NavLink>
  ));

  return (
    <div className="navbar">
      <NavLink to={`/`} style={activeStyle}>
        home
      </NavLink>
      <NavLink to={`/latest`} style={activeStyle}>
        latest
      </NavLink>
      {mappedTopics}
    </div>
  );
}

export default Navbar;
