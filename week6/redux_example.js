const constants = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  MULTIPLY: "multiply",
  ADD_PRODUCT_TO_CART: "CART.ADD_PRODUCT_TO_CART",
};

function incrementCount(number) {
  return { type: constants.INCREMENT, payload: number };
}

function decrementCount(number) {
  return { type: constants.DECREMENT, payload: number };
}
function multiplyCount(number) {
  return { type: constants.MULTIPLY, payload: number };
}

function addProductToCart(product) {
  return { type: constants.ADD_PRODUCT_TO_CART, payload: product };
}

const actions = {
  incrementCount,
  decrementCount,
  multiplyCount,
  addProductToCart,
};

// Store
{
  let state = {
    count: 0,
    product: {
      products: [
        { id: "p1", title: "Product One", price: 2000 },
        { id: "p2", title: "Product Two", price: 1000 },
      ],
    },
    cart: {
      products: [],
      totalPrice: 0,
    },
  };

  const setState = (newState) => {
    state = newState;
  };

  // example action = { type: "increment", payload: 2}
  const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case constants.INCREMENT:
        return { ...state, count: state.count + payload };
      case constants.DECREMENT:
        return { ...state, count: state.count - payload };
      case constants.MULTIPLY:
        return { ...state, count: state.count * payload };
      case constants.ADD_PRODUCT_TO_CART:
        const newProduct = payload;
        let newTotalPrice = state.cart.totalPrice;
        let newCartProducts = state.cart.products.map((cartProduct) => {
          if (cartProduct.id === newProduct.id) {
            cartProduct.quantity += 1;
            cartProduct.price += newProduct.price;
            newTotalPrice += newProduct.price;
          }
          return cartProduct;
        });
        if (newTotalPrice === state.cart.totalPrice) {
          newCartProducts = [
            ...newCartProducts,
            { ...newProduct, quantity: 1 },
          ];
          newTotalPrice += newProduct.price;
        }
        return {
          ...state,
          cart: { products: newCartProducts, totalPrice: newTotalPrice },
        };

      default:
        return state;
    }
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  function useDispatch() {
    return dispatch;
  }

  function useSelector(cb) {
    return cb(state);
  }
}

function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  // console.log(products);
  dispatch(actions.addProductToCart(products[0]));
  dispatch(actions.addProductToCart(products[0]));
  dispatch(actions.addProductToCart(products[0]));
  dispatch(actions.addProductToCart(products[1]));
}

function CartPage() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
}

ProductPage();
CartPage();
