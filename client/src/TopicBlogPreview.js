import React from "react";
import { useNavigate } from "react-router-dom";

function TopicBlogPreview({ blog }) {
  console.log(blog);
  const nav = useNavigate();
  return (
    <div
      className="topic-blog-preview"
      onClick={() => nav(`/blog/${blog.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`http://localhost:3000${blog.files[0].url}`}
        alt="cover"
        style={{ width: "25%", aspectRatio: "1" }}
      />
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0, 100).concat("...")}</p>
      </div>
    </div>
  );
}

export default TopicBlogPreview;
