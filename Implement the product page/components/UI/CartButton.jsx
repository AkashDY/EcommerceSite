import React, { Fragment, useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

const CartButton = ({ cartElements, onRemoveFromCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const totalAmount = cartElements.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartElements.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Fragment>
      <Button variant="light" onClick={handleCartClick}>
        Cart ({totalItems})
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartElements.map((item, index) => (
            <Row key={index} className="mb-3">
              <Col xs={4}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col xs={8}>
                <h4>{item.title}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <Button variant="danger" onClick={() => onRemoveFromCart(item)}>Remove</Button>
              </Col>
            </Row>
          ))}
          <hr />
          <h4>Total Amount: {totalAmount}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CartButton;
