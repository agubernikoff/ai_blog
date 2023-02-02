import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState();

  const blogID = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:3000/blog_posts/${blogID}`)
      .then((r) => r.json())
      .then((data) => setBlog(data));
  }, []);

  if (blog) console.log();
  return (
    <div className="blog">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p style={{ color: "grey" }} className="published_at">
            Published{" "}
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
          <img
            src={`http://localhost:3000${blog.files[0].url}`}
            className="blog-main-image"
          />
          <p>{blog.content}</p>
        </>
      ) : null}
    </div>
  );
}

export default Blog;
