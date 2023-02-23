import React from "react";
import { NavLink } from "react-router-dom";

function AdminControls({ logout }) {
  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          color: "rgb(232, 213, 253)",
          background: "rgb(40, 21, 65)",
        }
      : null;

  return (
    <div className="admin-controls">
      <NavLink to={`/new_post`} style={activeStyle}>
        New Blog Post
      </NavLink>
      <button onClick={() => logout()}>LOG OUT</button>
    </div>
  );
}

export default AdminControls;
