import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <>
      <section className="main-navbar">
        <div className="container-fluid padd">
          <div className="row">
            <div className="col-xl-12 col-lg-12 m-auto padd1">
              <nav className="navbar ptb20 navbar-expand-xl">
                <NavLink to="/" className="navbar-brand">
                  <img
                    src="./assests\logo.svg"
                    alt=""
                    className="img-fluid hbdsjbd"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="togg">
                    <i class="fas fa-bars"></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse marg"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li>
                      <div className="input-field">
                        <img src="./assests\search-icon.png" alt="img" className="img-fluid" />
                      <input type="seacrh" placeholder="Search by Creator, Collectibles or Collection"/>
                      </div>
                    </li>
                    <li class="nav-item active">
                      <Link to="/" class="nav-link">
                        {" "}
                        Discover <span class="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to="/" class="nav-link ">
                      Marketplace{" "}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/" class="nav-link ">
                      Avatar{" "}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/" class="nav-link ">
                      Community{" "}
                      </Link>
                    </li>
                    <li>
                    <button
                      type="button"
                      className="sbvsx"
                      data-toggle="modal"
                      data-target="#myModal2"
                    >
                      Connect Wallet
                    </button>
                    <img src="./assests\Avatar.svg" alt="img" className="img-fluid profilenav" />
                    </li>
                  </ul>
               
                 
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal right fade"
        id="myModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src=".\assests\close.svg"
                  className="img-fluid"
                ></img>
              </button>
              <div className="upper_text">
                <h4 class="modal-title heading_modal" id="myModalLabel2">
                  Connect Wallet
                </h4>
                <p className="para_modal">
                  By connecting your wallet, you agree to our <br />
                  <a href="#"> Terms of Service</a> and Our{" "}
                  <a href="#">Privacy Policy</a> .
                </p>
              </div>
            </div>

            <div class="modal-body">
              <div className="inner_btn">
                <button
                  type="button"
                  className="btn btn-btn-button d-block mb_bottom"
                >
                  <img
                    src=".\assests\metamas.svg"
                    className="img-fluid"
                  ></img>{" "}
                  Metamask
                </button>
                <button type="button" className="btn btn-btn-button ">
                  <img
                    src=".\assests\wal.svg"
                    className="img-fluid "
                  ></img>
                  WalletConnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
