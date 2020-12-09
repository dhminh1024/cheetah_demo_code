import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";

const RootComponent = (props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([
    { id: "p1", title: "Product 1", price: 1999 },
    { id: "p2", title: "Product 2", price: 999 },
  ]);
  // eslint-disable-next-line
  const [cart, setCart] = useState({
    products: [
      { id: "p1", title: "Product 1", price: 0, qty: 0 },
      { id: "p2", title: "Product 2", price: 0, qty: 0 },
    ],
    totalPrice: 0,
  });

  // Step 0 Read and understand the structure of the app

  // Step 1
  // Write a function called addProductToCart() that takes a product object as an argument
  // Example newProduct = { id: "p1", title: "Product 1", price: 1999 }
  // The function will add one new product into the cart
  const addProductToCart = (newProduct) => {
    const newProductList = cart.products.map((cartProduct) => {
      if (cartProduct.id === newProduct.id) {
        cartProduct.qty += 1;
        cartProduct.price += newProduct.price;
      }
      return cartProduct;
    });
    const newTotalPrice = cart.totalPrice + newProduct.price;
    setCart({ products: newProductList, totalPrice: newTotalPrice });
  };

  // Step 2
  // Write a function called removeProductFromCart() that takes a product object as an argument
  // Example removedProduct = { id: "p1", title: "Product 1", price: 1999 }
  // The function will remove one product from the cart. The min value of quantity is 0
  const removeProductFromCart = (removedProduct) => {
    let newTotalPrice = cart.totalPrice;
    const newProductList = cart.products.map((cartProduct) => {
      if (cartProduct.id === removedProduct.id && cartProduct.qty > 0) {
        cartProduct.qty -= 1;
        cartProduct.price -= removedProduct.price;
        newTotalPrice -= removedProduct.price;
      }
      return cartProduct;
    });
    setCart({ products: newProductList, totalPrice: newTotalPrice });
  };

  // Step 3
  // Pass the functions to the product components to handle the click event of the Add/Remove buttons

  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        RootComponent {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <p className="text-left">
        <ReactJson
          name="state"
          src={{ products, cart }}
          collapsed={true}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </p>
      <Container fluid>
        <Row>
          <Col>
            <ProductPage products={products} addProduct={addProductToCart} />
          </Col>
          <Col>
            <CartPage cart={cart} />
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
            <ProductOne
              product={props.products[0]}
              addProduct={props.addProduct}
            />
          </Col>
          <Col>
            <ProductTwo product={props.products[1]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const CartPage = (props) => {
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
            <CartProductOne product={props.cart.products[0]} />
          </Col>
          <Col>
            <CartProductTwo product={props.cart.products[1]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h4>Total Price: 💵 {props.cart.totalPrice}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ProductOne = (props) => {
  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        {props.product.title} {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <img src={productOne} alt="Product One" width="100%" />
            <h5 className="text-success">💵 {props.product.price}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="success"
              size="sm"
              style={{ width: "5rem" }}
              onClick={() => props.addProduct(props.product)}
            >
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
  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        {props.product.title} {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <Row>
          <Col>
            <img src={productTwo} alt="Product Two" width="100%" />
            <h5 className="text-success">💵 {props.product.price}</h5>
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
  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        CartProduct 1 {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <h4>Quantity: {props.product.qty}</h4>
        <h4>Price: 💵 {props.product.price}</h4>
      </Container>
    </div>
  );
};

const CartProductTwo = (props) => {
  return (
    <div className="box text-center">
      <h4 className="box-title p-2">
        CartProduct 2 {`({`}
        <span className="text-warning">{Object.keys(props).join(", ")}</span>
        {`})`}
      </h4>
      <Container fluid>
        <h4>Quantity: {props.product.qty}</h4>
        <h4>Price: 💵 {props.product.price}</h4>
      </Container>
    </div>
  );
};

const PropDrillingExercise = () => {
  return (
    <Container>
      <br />
      <h5>How to add products to the cart?</h5>
      <br />
      <RootComponent />
    </Container>
  );
};

export default PropDrillingExercise;
