import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3000/blog_posts")
      .then((r) => r.json())
      .then((data) => console.log(data, "ayyy u still go it homeboy"));
  });
  return <h1>Hey Sam, whatsup Slime? Get the routes nice, fam!</h1>;
};

export default App;
