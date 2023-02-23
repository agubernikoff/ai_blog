import React from "react";
import Slideshow from "./Slideshow";
import Section from "./Section";

function Home() {
  const topics = ["sports", "pop culture", "food", "nonsense"];

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
