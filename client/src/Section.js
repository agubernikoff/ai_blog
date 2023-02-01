import React from "react";

function Section({ header, blogs }) {
  console.log(blogs);

  return (
    <div className="section">
      <h3>{header}</h3>
      {blogs[0] ? (
        <>
          <div style={{ gridColumnStart: 1, gridRowStart: 2 }}>
            <img
              src={`http://localhost:3000${blogs[0].files[0].url}`}
              style={{ width: "100%", maxHeight: "90%", objectFit: "cover" }}
            />
            <h5>{blogs[0].title}</h5>
          </div>
          <div style={{ gridColumnStart: 2, gridRowStart: 2 }}>
            <img
              src={`http://localhost:3000${blogs[1].files[0].url}`}
              style={{ width: "100%", maxHeight: "90%", objectFit: "cover" }}
            />
            <h5>{blogs[1].title}</h5>
          </div>
          <div style={{ gridColumnStart: 2, gridRowStart: 3 }}>
            <img
              src={`http://localhost:3000${blogs[2].files[0].url}`}
              style={{ width: "100%", maxHeight: "90%", objectFit: "cover" }}
            />
            <h5>{blogs[2].title}</h5>
          </div>
          <div style={{ gridColumnStart: 3, gridRowStart: 2 }}>
            <img
              src={`http://localhost:3000${blogs[3].files[0].url}`}
              style={{ width: "100%", maxHeight: "90%", objectFit: "cover" }}
            />
            <h5>{blogs[3].title}</h5>
          </div>
          <div style={{ gridColumnStart: 3, gridRowStart: 3 }}>
            <img
              src={`http://localhost:3000${blogs[4].files[0].url}`}
              style={{ width: "100%", maxHeight: "90%", objectFit: "cover" }}
            />
            <h5>{blogs[4].title}</h5>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Section;
