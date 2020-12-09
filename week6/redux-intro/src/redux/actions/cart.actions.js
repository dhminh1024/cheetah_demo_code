import * as types from "../constants/cart.constants";

const addProduct = (product) => ({
  type: types.ADD_PRODUCT_TO_CART,
  payload: product,
});

const removeProduct = (product) => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  payload: product,
});

const cartActions = {
  addProduct,
  removeProduct,
};

export default cartActions;
