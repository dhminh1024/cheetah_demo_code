import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

const AssignmentTwo = () => {
  const [myList, setMyList] = useState(allItems);
  // const [count, setCount] = useState(0);

  const addItem = () => {
    // if (count < allItems.length) {
    //   setMyList([...myList, allItems[count]]);
    //   setCount(count + 1);
    // }
    const newItem = allItems.find((item) => !myList.includes(item));
    if (newItem) {
      setMyList([...myList, newItem]);
    }
  };
  const removeItem = (toRemoveItem) => {
    setMyList(myList.filter((item) => item.id !== toRemoveItem.id));
  };

  return (
    <Container>
      <Button className="btn btn-info" onClick={addItem}>
        Add Item
      </Button>
      <ul>
        {myList.map((item, index) => (
          <li key={item.id}>
            <Button variant="outline-danger" onClick={() => removeItem(item)}>
              &times;
            </Button>
            <label htmlFor={`${item.id}-input`}>{item.value}</label>
            <input
              id={`${item.id}-input`}
              type="text"
              defaultValue={item.value}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AssignmentTwo;
