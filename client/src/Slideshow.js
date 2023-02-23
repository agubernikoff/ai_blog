import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const sliced = [...blogs].slice(0, 5);

  const nav = useNavigate();

  const properties = {
    duration: 2500,
    autoplay: true,
    transitionDuration: 750,
    arrows: true,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{"•"}</div>,
  };

  return (
    <div className="slide-container">
      {blogs[0] ? (
        <Slide {...properties}>
          {sliced.map((blog, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(http://localhost:3000${blog.files[0].url})`,
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
                onClick={() => nav(`/blog/${blog.id}`)}
              >
                <h2 className="slide-show-title">{blog.title}</h2>
              </div>
            </div>
          ))}
        </Slide>
      ) : null}
    </div>
  );
};

export default Slideshow;
