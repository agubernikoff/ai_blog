import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";

function AdminControls() {
  const dispatch = useDispatch();

  function logout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => dispatch(userActions.logOut()));
  }

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
