import React from "react";
import { NavLink } from "react-router-dom";

function AdminControls({ logout }) {
  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          textDecoration: "underline",
        }
      : null;

  return (
    <div>
      <NavLink to={`/new_post`} style={activeStyle}>
        New Blog Post
      </NavLink>
      <button onClick={() => logout()}>LOG OUT</button>
    </div>
  );
}

export default AdminControls;
