import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopicFirstBlogPreview from "./TopicFirstBlogPreview";
import TopicBlogPreview from "./TopicBlogPreview";

function Topic({ blogs }) {
  console.log(blogs);
  const params = useParams();

  const filteredBlogs = blogs.filter((b) => b.topic === params.topic);

  const restOfBlogs = filteredBlogs
    .slice(1)
    .map((b) => <TopicBlogPreview blog={b} key={b.id} />);
  return (
    <div style={{ width: "75%", margin: "auto" }}>
      <h2>{params.topic.toUpperCase()}</h2>
      <TopicFirstBlogPreview blog={filteredBlogs[0]} />
      {restOfBlogs}
    </div>
  );
}

export default Topic;
