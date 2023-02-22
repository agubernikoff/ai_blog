import React from "react";
import { useNavigate } from "react-router-dom";

function TopicFirstBlog({ blog }) {
  const nav = useNavigate();
  if (blog)
    return (
      <div
        onClick={() => nav(`/blog/${blog.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={`http://localhost:3000${blog.files[0].url}`}
          alt="cover"
          style={{ width: "50%" }}
        />
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0, 100).concat("...")}</p>
      </div>
    );
}

export default TopicFirstBlog;
