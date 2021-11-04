import React from "react";
import { Link } from "react-router-dom";
import "../Styled/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col order-first col__footer">
            <div className="footer__title">Discovery</div>
            <a href="#">Mobile apps</a>
            <a href="#">Write a review</a>
            <a href="#">Create collections</a>
            <a href="#">Rewards</a>
            <a href="#">Privacy</a>
            <a href="#">Term of use</a>
          </div>
          <div className="col col__footer">
            <div className="footer__title">Company</div>
            <a href="#">About us</a>
            <a href="#">Support</a>
            <a href="#">Jobs</a>
            <a href="#">Investors</a>
            <a href="#">Give Us Feedbacks</a>
            <a href="#">Regulation</a>
            <a href="#">Service agreement</a>
            <a href="#">Contact</a>
          </div>
          <div className="col col__footer">
            <div className="footer__title">Join us on</div>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Google</a>
            <a href="#">Shopee</a>
            <a href="#"></a>
          </div>
          <div className="col order-last col__footer">
            <div className="footer__title">Join us on</div>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Google</a>
            <a href="#">Shopee</a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
