import React, { useState, useEffect } from "react";

const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const useCounter = () => {
  const [count, setCount] = useLocalStorageState("count", 0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  return [count, increment, decrement];
};

// without custom hook
const CustomHookExample = () => {
  const [count, increment, decrement] = useCounter(0);
  const [book, setBook] = useLocalStorageState("book", {
    title: "",
    author: "",
  });

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
