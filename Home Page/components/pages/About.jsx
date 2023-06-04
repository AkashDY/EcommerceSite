import React, { Fragment } from "react";
import Header from "../UI/Header";
import { Card, Image } from "react-bootstrap";
import aksh from '../Images/aksh.jpg';
import MainCard from "../UI/MainCard";

const About = () => {
  return (
    <Fragment>
      <Header showCartButton={false} />
      <MainCard/>
      <Card style={{ width: "50rem" }} className="shadow-lg mx-auto mt-3">
        <div className="d-flex align-items-center">
          <Image src={aksh} alt="about" className="p-3 rounded border" style={{width: "20rem", height: "20rem"}} />
          <div className="flex-grow-1">
            <Card.Title className="shadow-lg mx-auto mt-3">About Us</Card.Title>
            <Card.Body>
              Welcome to <strong>Music Burst !!!</strong> We are an online store that
              offers a wide range of products to meet all of your shopping needs.
              Our goal is to provide our customers with a convenient and enjoyable
              shopping experience from start to finish. We pride ourselves on our
              extensive selection of products, competitive pricing, and exceptional
              customer service. 
              
              <br />
              <br />Whether you're shopping for the latest fashion
              trends, the newest electronics, or something else entirely, we've got
              you covered. With fast and reliable shipping, you can rest assured
              that your purchase will arrive on time and in excellent condition. At 
              <strong> DisneyWorld </strong>, we are dedicated to making your
              shopping experience as seamless as possible. Our user-friendly website
              is designed to help you find exactly what you're looking for quickly
              and easily. 
              
              <br />
              <br />If you have any questions or concerns, our friendly and
              knowledgeable customer service team is always here to help. We believe
              in offering our customers the best value for their money, which is why
              we are constantly updating our inventory and sourcing new products. We
              also offer special deals and promotions on a regular basis, so be sure
              to sign up for our newsletter to stay up-to-date on the latest offers.
              Thank you for choosing <strong> DisneyWorld </strong> as your go-to
              shopping destination. We look forward to serving you!
            </Card.Body>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default About;
