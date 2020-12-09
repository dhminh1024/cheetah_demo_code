import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import { useDispatch } from "react-redux";

const RootComponent = (props) => {
  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        RootComponent {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <ProductPage />
          </Col>
          <Col>
            <CartPage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ProductPage = (props) => {
  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        Product Page {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <ProductOne />
          </Col>
          <Col>
            <ProductTwo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const CartPage = (props) => {
  // Step 6
  // Replace the line below to get data of the second product from state.cart.totalPrice
  const totalPrice = "...";

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        Cart Page {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <CartProductOne />
          </Col>
          <Col>
            <CartProductTwo />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h4>Total Price: 💵 {totalPrice}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ProductOne = (props) => {
  // Step 4
  // Replace the line below to get data of the first product from state.product
  // You should see the price is updated
  const product = { title: "...", price: "...", qty: "..." };

  // Step 7
  // Define: const dispatch = useDispatch();
  // Create a function to handle click event of the button Add
  // In the function, dispatch cartActions.addProduct(product) to trigger the action add product to the cart
  // Make the function handle onClick event of the button
  // eslint-disable-next-line
  const dispatch = useDispatch();

  // Step 8
  // Create a function to handle click event of the button Remove
  // In the function, dispatch cartActions.removeProduct(product) to trigger the action remove product from the cart
  // Make the function handle onClick event of the button

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        {product.title} {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <img src={productOne} alt="Product One" width="100%" />
            <h5 className="text-success">💵 {product.price}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="success" size="sm" style={{ width: "5rem" }}>
              Add
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="sm" style={{ width: "5rem" }}>
              Remove
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ProductTwo = (props) => {
  // Step 5
  // Replace the line below to get data of the second product from state.product
  // You should see the price is updated
  const product = { title: "...", price: "...", qty: "..." };

  // Step 9
  // Repeat step 7 and 8 for this component

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        {product.title} {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <img src={productTwo} alt="Product Two" width="100%" />
            <h5 className="text-success">💵 {product.price}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="success" size="sm" style={{ width: "5rem" }}>
              Add
            </Button>
          </Col>
          <Col>
            <Button variant="danger" size="sm" style={{ width: "5rem" }}>
              Remove
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const CartProductOne = (props) => {
  // Step 2
  // Replace the line below to get data of the first product from state.cart.products
  // Change the price of products in `cart.reducer.js` to see the effect
  const product = { price: "...", qty: "..." };

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        CartProduct 1 {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <h4>Quantity: {product.qty}</h4>
        <h4>Price: 💵 {product.price}</h4>
      </Container>
    </div>
  );
};

const CartProductTwo = (props) => {
  // Step 3
  // Replace the line below to get data of the second product from state.cart.products
  // Change the price of products in `cart.reducer.js` to see the effect
  const product = { price: "...", qty: "..." };

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        CartProduct 2 {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <h4>Quantity: {product.qty}</h4>
        <h4>Price: 💵 {product.price}</h4>
      </Container>
    </div>
  );
};

const Store = (props) => {
  // Step 1
  // use useSelector() to get the data of products and cart in the store
  // pass {products, cart} to the src attribut of the component <ReactJson/>

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">Store</h4>
      <p className="text-left">
        <ReactJson
          name="store"
          src={{}}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </p>
    </div>
  );
};

const ReduxExercise = () => {
  return (
    <Container fluid>
      <br />
      <h5>How to add products to the cart using Redux?</h5>
      <br />
      <Row>
        <Col md={3}>
          <Store />
        </Col>
        <Col md={9}>
          <RootComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ReduxExercise;
