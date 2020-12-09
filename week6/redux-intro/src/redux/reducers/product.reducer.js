import * as types from "../constants/product.constants";
const initialState = [
  { id: "p1", title: "Product 1", price: 1999 },
  { id: "p2", title: "Product 2", price: 999 },
];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
