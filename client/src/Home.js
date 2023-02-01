import React from "react";
import Slideshow from "./Slideshow";
import Section from "./Section";

function Home({ blogs }) {
  const topics = ["sports", "entertainment", "politics", "lifestyle", "misc"];
  const mappedSections = topics.map((topic, index) => (
    <Section header={topic} key={topic} blogs={blogs} />
  ));
  return (
    <div className="home">
      <Slideshow blogs={blogs.slice(0, 5)} />
      <div className="section-container">{mappedSections}</div>
    </div>
  );
}

export default Home;
