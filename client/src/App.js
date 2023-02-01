import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blog_posts")
      .then((r) => r.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="App">
      <div>header</div>
      <div>
        <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          {/* <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
