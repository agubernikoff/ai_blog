import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import "./App.css";
import Blog from "./Blog";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  function login(user) {
    setUser(user);
  }
  console.log(user);

  useEffect(() => {
    fetch("http://localhost:3000/blog_posts")
      .then((r) => r.json())
      .then((data) => setBlogs(data));

    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/login" element={<Login login={login} />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
