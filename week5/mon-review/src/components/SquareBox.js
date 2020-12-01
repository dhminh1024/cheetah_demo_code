import React from "react";

const SquareBox = ({ color, setClickedText, btnColor, setCount }) => {
  // console.log(color);
  const handleClick = () => {
    setClickedText(`Clicked ${color}`);
  };
  return (
    <div style={{ backgroundColor: color, width: "100px", height: "100px" }}>
      <button
        style={{ backgroundColor: btnColor, color: "white" }}
        onClick={handleClick}
      >
        Click Me
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Count
      </button>
    </div>
  );
};

export default SquareBox;
