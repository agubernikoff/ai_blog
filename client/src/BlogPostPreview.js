import React from "react";
import { useNavigate } from "react-router-dom";

function BlogPostPreview({ blog }) {
  const nav = useNavigate();
  return (
    <div className="blog-post-preview" onClick={() => nav(`/blog/${blog.id}`)}>
      <img src={`http://localhost:3000${blog.files[0].url}`} />
      <h3>{blog.title}</h3>
      <p>{blog.content.slice(0, 100).concat("...")}</p>
    </div>
  );
}

export default BlogPostPreview;
