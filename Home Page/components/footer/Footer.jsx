import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer  className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <h5>About Us</h5>
                        <p>One of the best organization for web designing and development.</p>
                    </div>
                    <div className="col-sm-4">
                        <h5>Address</h5>
                        <p>Agra</p>
                        <p>Uttar Pradesh</p>
                    </div>
                    <div className="col-sm-4">
                        <h5>Contact Us</h5>
                        <p>Phone: +91 9876543210</p>
                        <p>Official Email: sky.deep.1997@gmail.com</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 text-center">
                        <hr />
                        <p className="text-muted">&copy; 2023 developed by akashDY. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;