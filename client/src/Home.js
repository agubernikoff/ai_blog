import React from "react";
import Paralax from "./Paralax";
import Section from "./Section";

function Home() {
  const sections = ["header 1", "header 2", "header 3", "header 4", "header 5"];
  const mappedSections = sections.map((section) => (
    <Section header={section} />
  ));
  return (
    <div className="home">
      <h1>Thy Eschalot</h1>
      <Paralax />
      <div className="section-container">{mappedSections}</div>
    </div>
  );
}

export default Home;
