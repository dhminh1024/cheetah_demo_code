import * as types from "../constants/cart.constants";
const initialState = {
  products: [
    { id: "p1", title: "Product 1", price: 0, qty: 0 },
    { id: "p2", title: "Product 2", price: 0, qty: 0 },
  ],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newProductList = null;
  let newTotalPrice = state.totalPrice;

  switch (type) {
    case types.ADD_PRODUCT_TO_CART:
      const newProduct = payload;
      newProductList = state.products.map((cartProduct) => {
        if (cartProduct.id === newProduct.id) {
          cartProduct.qty += 1;
          cartProduct.price += newProduct.price;
        }
        return cartProduct;
      });
      newTotalPrice += newProduct.price;
      return { products: newProductList, totalPrice: newTotalPrice };

    case types.REMOVE_PRODUCT_FROM_CART:
      const removedProduct = payload;
      newProductList = state.products.map((cartProduct) => {
        if (cartProduct.id === removedProduct.id && cartProduct.qty > 0) {
          cartProduct.qty -= 1;
          cartProduct.price -= removedProduct.price;
          newTotalPrice -= removedProduct.price;
        }
        return cartProduct;
      });
      return { products: newProductList, totalPrice: newTotalPrice };

    default:
      return state;
  }
};

export default cartReducer;
