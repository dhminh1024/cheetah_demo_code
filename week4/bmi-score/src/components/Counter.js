import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(5);
  const handleClick = () => {
    console.log("Clicked");
    setCount(count + 1);
  };
  return (
    <button onClick={handleClick} className="btn btn-danger">
      {count}
    </button>
  );
};

export default Counter;
