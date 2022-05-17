import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrolltop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="main-footer" id="about">
        <div className="container-fluid">
          <div className="parent">
            <div className="first">
              <div className="logo_img">
                <img
                  src="./assests\logo.svg"
                  alt=""
                  className="img-fluid hbdsjbd"
                />
              </div>
              <div className="text">
                <p> +1 (123) 456-7890</p>
                <p>contact@virtualia.cr </p>
              </div>
            </div>
            <div className="second">
              <h6>Sitemap</h6>
              <ul>
                <li>Discover </li>
                <li>Marketplace</li>
                <li>Avatar</li>
                <li>Community</li>
                <li>Wallet</li>
              </ul>
            </div>
            <div className="third">
              <ul className="footer_icons">
                <li>
                  <a href="">
                    <img
                      src="./assests\twitter-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./assests\telegram-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./assests\instagram-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./assests\medium-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="./assests\reddit-icon.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
              <div className="text">
                <h6>Head Office</h6>
                <p>
                  12 BD Royal, 2450 Luxembourg. <br />
                  Luxembourg
                </p>
              </div>
            </div>
            <div className="fourth">
              <p>News Letter</p>
              <div className="input-field">
                <input type="search" placeholder="Enter your email address" />
                <img
                  src=".\assests\mail-icon.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
              <div className="inner-text">
                <p>
                  By submitting your email you agree to our{" "}
                  <span>Terms and Conditions</span> and{" "}
                  <span>Privacy Policy</span>. You will receive email
                  communications, publications and information and you can
                  opt-out at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
