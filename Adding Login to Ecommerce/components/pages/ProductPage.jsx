import React, { Fragment } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import { useState } from "react";
import Header from "../UI/Header";

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

const reviews = [
  // "Great product!",
  // "I love it!",
  // "Would definitely recommend.",
  // "Best purchase ever.",
  // "Five stars.",
  {
    rating: 5,
    review:
      "I've used this product for over a month now and I'm very happy with it. The color quality and resolution of the photos is amazing! So lightweight and portable, perfect for travel.",
    customer: "Amy S., Seattle, WA",
  },
  {
    rating: 4,
    review: "Pretty good overall but shipping took longer than expected.",
    customer: "James P., New York, NY",
  },
  {
    rating: 3,
    review:
      "I wanted to love this but it was just okay. Not as durable as I expected and battery life wasn't great.",
    customer: "Tiffany T., London, UK",
  },
  {
    rating: 5,
    review: "Great for the price! Would definitely recommend.",
    customer: "Mark J., Sydney, Australia",
  },
  {
    rating: 1,
    review: "Terrible product and even worse customer service. Do not buy!",
    customer: "Emma W., Toronto, Canada",
  },
  {
    response:
      "We apologize for your negative experience. Please contact our customer service team so we can make things right.",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = productsArr.find((product) => product.title === id);
  const [mainImage, setMainImage] = useState(product ? product.imageUrl : "");

  return (
    <Fragment>
      <Header showCartButton={false} />
      <Container className="product-page">
        {product ? (
          <Row>
            <Col md={6}>
              <Card className="image-card">
                <Card.Img
                  className="product-image"
                  src={mainImage}
                  alt={product.title}
                />
                <Card.Body>
                  <div className="image-cards">
                    {productsArr.map((product, index) => (
                      <img
                        key={index}
                        className="image-thumbnail"
                        src={product.imageUrl}
                        alt={product.title}
                        onClick={() => setMainImage(product.imageUrl)}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="product-card">
                <Card.Body>
                  <Card.Title className="text-center">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    Price: ${product.price}
                  </Card.Text>
                  {/* <h3 className="reviews-heading">Reviews</h3>
                  {reviews.map((review, index) => (
                    <p key={index}>{review}</p> */}
                  <h3 className="reviews-heading">Reviews</h3>
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <p>
                        <strong>{review.customer}</strong>
                      </p>
                      <p>Rating: {review.rating} stars</p>
                      <p>{review.review}</p>
                      {review.response && <p>{review.response}</p>}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <p>Product not found</p>
        )}
      </Container>
    </Fragment>
  );
};

export default ProductPage;
