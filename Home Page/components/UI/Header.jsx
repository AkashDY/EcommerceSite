import React, { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Header = ({ cartItems, onRemoveFromCart, showCartButton }) => {
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>Music Burst</Navbar.Brand>
          <Link to="/about" style={{ color: "white" }}>
            About
          </Link>
          <Link to="/home" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/" style={{ color: "white" }}>
            Store
          </Link>
          {showCartButton && (
            <CartButton
              cartElements={cartItems}
              onRemoveFromCart={onRemoveFromCart}
            />
          )}
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
