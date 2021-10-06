import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col order-first col__footer">
            <h4>Company</h4>
            <a href="#">- About</a>
            <a href="#">- Blog</a>
            <a href="#">- Careers</a>
            <a href="#">- Report Fraud</a>
          </div>
          <div className="col col__footer">
            <h4>For you</h4>
            <a href="#">- Privacy</a>
            <a href="#">- Terms</a>
            <a href="#">- Security</a>
            <a href="#">- Sitemap</a>
            <a href="#">- Code of conduct</a>
          </div>
          <div className="col col__footer">
            <h4>FoodHub Newsletter</h4>
            <p>Stay updated with new offers from FoodHub</p>
            <div className="col__sendEmail">
              <input
                type="email"
                className=""
                placeholder="Your email address"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <button className="btn btn-success" type="submit">
                SEND
              </button>
            </div>
          </div>
          <div className="col order-last col__footer">
            <h4>Resources/ Stack Used</h4>
            <a href="#">- React Material UI redux</a>
            <a href="#">- NodeJs</a>
            <a href="#">- Express</a>
            <a href="#">- MongoDB</a>
            <a href="#">- Zomato</a>
            <a href="#">- Freepik</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
