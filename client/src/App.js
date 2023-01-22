import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:3000/blog_posts")
      .then((r) => r.json())
      .then((data) => console.log(data, "ayyy u still go it homeboy"));
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </div>
  );
};

export default App;
