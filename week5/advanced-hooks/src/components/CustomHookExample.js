import React, { useState, useEffect } from "react";

// without custom hook
const CustomHookExample = () => {
  const [count, setCount] = useState(0);
  const [book, setBook] = useLocalStorageState("book", {
    title: "",
    author: "",
  });

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <p>{"=".repeat(40)}</p>
      <h2>Custom Hook</h2>
      <h4>Example 1</h4>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>

      <p>{"-".repeat(40)}</p>

      <h4>Example 2</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />

        <button>Submit</button>
      </form>
      <div>
        <div>Title: {book.title}</div>
        <div>Author: {book.author}</div>
      </div>
    </div>
  );
};

// With custom hook

export default CustomHookExample;
