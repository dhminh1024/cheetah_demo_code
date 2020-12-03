import React, { useState, useEffect, useRef } from "react";

const UseRefExample = () => {
  // const [reRenderCount, setReRenderCount] = useState(0);
  const [title, setTitle] = useState("");
  const reRenderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // setReRenderCount((prevCount) => prevCount + 1);
    reRenderCount.current = reRenderCount.current + 1;
  });

  useEffect(() => {
    const myInput = inputRef.current;
    // myInput is the <input> DOM node!
    console.log(myInput);
  }, []);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p>{"=".repeat(40)}</p>
      <h2>useRef</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <div>Title: {title}</div>
      <br />
      <div>
        <strong>#Re-Render: {reRenderCount.current}</strong>
      </div>
    </div>
  );
};

export default UseRefExample;
