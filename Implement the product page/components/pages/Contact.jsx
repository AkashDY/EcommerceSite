import React, { Fragment } from "react";
import { useRef } from "react";
import { Card } from "react-bootstrap";
import Header from "../UI/Header";
import "./Contact.css";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    fetch(
      "https://react-http-c413a-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Contact-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    event.currentTarget.reset();
  }

  return (
    <Fragment>
      <Header showCartButton={false} />
      <Card className="shadow-lg mx-auto mt-3">
        <div className="contact">
          <form onSubmit={submitHandler}>
            <h1>Contact Us</h1>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" ref={nameRef} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="text" ref={emailRef} />
            </div>
            <div>
              <label htmlFor="number">Phone No: </label>
              <input type="number" ref={phoneRef} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Card>
    </Fragment>
  );
};

export default Contact;
