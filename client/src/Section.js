import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogPostPreview from "./BlogPostPreview";

function Section({ header }) {
  const blogs = useSelector((state) => state.blogs.blogs);
  const nav = useNavigate();

  const filteredBlogs = [...blogs].filter((blog) => blog.topic === header);

  const mappedPreviews = filteredBlogs
    .slice(0, 5)
    .map((blog) => <BlogPostPreview blog={blog} key={blog.id} />);

  return (
    <div className="outside-grid">
      <h2 onClick={() => nav(`/topic/${header}`)} style={{ cursor: "pointer" }}>
        {header.toUpperCase()}
      </h2>
      {blogs[0] ? (
        <>
          {mappedPreviews[0]}
          <div className="inside-grid">{mappedPreviews.slice(1, 5)}</div>
        </>
      ) : null}
    </div>
  );
}

export default Section;
