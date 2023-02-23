import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import "./App.css";
import Blog from "./Blog";
import NewPost from "./NewPost";
import Topic from "./Topic";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";
import { blogsActions } from "./store/blogs-slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/blog_posts")
      .then((r) => r.json())
      .then((data) => {
        console.log("yea");
        dispatch(blogsActions.setBlogs(data));
      });

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(userActions.setUser(user));
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topic" element={<Topic />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> */}
          <Route path="/new_post" element={<NewPost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
