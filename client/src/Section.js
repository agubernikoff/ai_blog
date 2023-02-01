import React from "react";
import BlogPostPreview from "./BlogPostPreview";

function Section({ header, blogs }) {
  const filteredBlogs = blogs.filter((blog) => blog.topic === header);

  const mappedPreviews = filteredBlogs
    .slice(0, 5)
    .map((blog) => <BlogPostPreview blog={blog} key={blog.id} />);

  return (
    <div className="outside-grid">
      <h2>{header.toUpperCase()}</h2>
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
