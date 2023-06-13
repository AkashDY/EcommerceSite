import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = ({ onAddToCart }) => {
  return (
    <Container>
    <Row className="justify-content-md-center">
      {productsArr.map((product, index) => (
        <Col xs="7" sm="7" lg="6" md="6" key={index}>
          <div>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to cart</button>
          </div>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default Products;
