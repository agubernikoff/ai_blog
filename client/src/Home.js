import React from "react";
import Slideshow from "./Slideshow";
import Section from "./Section";
import { useSelector } from "react-redux";

function Home() {
  const topics = ["sports", "entertainment", "politics", "lifestyle", "misc"];

  const mappedSections = topics.map((topic) => (
    <Section header={topic} key={topic} />
  ));
  return (
    <div className="home">
      <Slideshow />
      <div className="section-container">{mappedSections}</div>
    </div>
  );
}

export default Home;
