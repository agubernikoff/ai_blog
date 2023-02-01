import React from "react";

function BlogPostPreview({ blog }) {
  return (
    <div className="blog-post-preview">
      <img src={`http://localhost:3000${blog.files[0].url}`} />
      <h3>{blog.title}</h3>
      <p>{blog.content.slice(0, 100).concat("...")}</p>
    </div>
  );
}

export default BlogPostPreview;
