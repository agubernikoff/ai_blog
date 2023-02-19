import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Blog({ user, deleteBlog }) {
  const [blog, setBlog] = useState();

  const blogID = useParams().id;

  const nav = useNavigate();

  useEffect(() => {
    fetch(`/blog_posts/${blogID}`)
      .then((r) => r.json())
      .then((data) => setBlog(data));
  }, [blogID]);

  function handleDelete() {
    fetch(`/blog_posts/${blogID}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        deleteBlog(blog.id);
        nav("/");
      }
    });
  }
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
            src={blog.files[0].url}
            className="blog-main-image"
            alt="content"
          />
          <p>{blog.content}</p>
          <button onClick={handleDelete}>DELETE BLOG</button>
        </>
      ) : null}
    </div>
  );
}

export default Blog;
