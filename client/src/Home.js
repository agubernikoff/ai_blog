import React from "react";
import Slideshow from "./Slideshow";
import Section from "./Section";

function Home({ blogs }) {
  const sections = ["header 1", "header 2", "header 3", "header 4", "header 5"];
  const mappedSections = sections.map((section, index) => (
    <Section
      header={section}
      key={section}
      blogs={blogs.slice(index * 5, index * 5 + 5)}
    />
  ));
  return (
    <div className="home">
      <Slideshow blogs={blogs.slice(0, 5)} />
      <div className="section-container">{mappedSections}</div>
    </div>
  );
}

export default Home;
