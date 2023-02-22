import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import "./App.css";
import Blog from "./Blog";
import NewPost from "./NewPost";
import Topic from "./Topic";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  function login(user) {
    setUser(user);
  }

  function logout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  function updateBlogs(newBlog) {
    setBlogs([newBlog, ...blogs]);
  }

  function deleteBlog(blogID) {
    const filteredBlogs = blogs.filter((blog) => blog.id !== blogID);
    console.log(filteredBlogs);
    setBlogs(filteredBlogs);
  }

  useEffect(() => {
    fetch("/blog_posts")
      .then((r) => r.json())
      .then((data) => setBlogs(data));

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Header user={user} logout={logout} />
      <div>
        <Routes>
          <Route path="/" element={<Home blogs={blogs} />} />
          <Route path="/topic/:topic" element={<Topic blogs={blogs} />} />
          <Route
            path="/blog/:id"
            element={<Blog user={user} deleteBlog={deleteBlog} />}
          />
          <Route path="/login" element={<Login login={login} />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> */}
          <Route
            path="/new_post"
            element={<NewPost updateBlogs={updateBlogs} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
