import React from "react";

function Section({ header }) {
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    },
  ];
  return (
    <div className="section">
      <h3>{header}</h3>
      <div style={{ gridColumnStart: 1, gridRowStart: 2 }}>
        <img src={slideImages[0].url} style={{ width: "100%" }} />
        <h5>Title</h5>
      </div>
      <div style={{ gridColumnStart: 2, gridRowStart: 2 }}>
        <img src={slideImages[1].url} style={{ width: "100%" }} />
        <h5>Title</h5>
      </div>
      <div style={{ gridColumnStart: 2, gridRowStart: 3 }}>
        <img src={slideImages[2].url} style={{ width: "100%" }} />
        <h5>Title</h5>
      </div>
      <div style={{ gridColumnStart: 3, gridRowStart: 2 }}>
        <img src={slideImages[3].url} style={{ width: "100%" }} />
        <h5>Title</h5>
      </div>
      <div style={{ gridColumnStart: 3, gridRowStart: 3 }}>
        <img src={slideImages[4].url} style={{ width: "100%" }} />
        <h5>Title</h5>
      </div>
    </div>
  );
}

export default Section;
