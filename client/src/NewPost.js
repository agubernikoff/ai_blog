import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading.js";

function NewPost({ updateBlogs }) {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("topic", topic);
  formData.append("title", title);
  formData.append("content", content);
  for (let i = 0; i < files.length; i++) {
    formData.append("files[]", files[i]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (files.length > 10) {
      setErrors(["Too many files. Maximum allowed is 10"]);
      setIsLoading(false);
    } else if (files.length === 0) {
      setErrors(["Please attach a cover photo"]);
      setIsLoading(false);
    } else {
      fetch("/blog_posts", {
        method: "POST",
        body: formData,
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            setIsLoading(false);
            updateBlogs(data);
            navigate("/");
          });
        } else {
          r.json().then((data) => {
            setErrors(data.errors);
            setIsLoading(false);
          });
        }
      });
    }
  }
  console.log(topic);
  return (
    <div className="newPost">
      <form onSubmit={handleSubmit} className="newPostForm">
        <label>Topic:</label>
        <select
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          value={topic}
        >
          <option value="" disabled>
            Select your option
          </option>
          <option>sports</option>
          <option>entertainment</option>
          <option>politics</option>
          <option>lifestyle</option>
          <option>misc</option>
        </select>
        <br />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          type="text"
          id="description"
          autoComplete="off"
          rows="10"
          cols="75"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label htmlFor="files">Upload photos or videos:</label>
        <input
          type="file"
          accept=".jpeg,.png,.gif,.mov,.mp4"
          name="files"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        ></input>
        <br />
        <button variant="fill" type="submit" style={{ marginTop: 10 }}>
          {isLoading ? <Loading /> : "SUBMIT"}
        </button>
        {errors.map((err) => (
          <h3 key={err} className="errors">
            {err}
          </h3>
        ))}
      </form>
    </div>
  );
}

export default NewPost;
