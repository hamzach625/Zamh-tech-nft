import React, { useState } from "react";
import "./banner.scss";

const Banner = () => {


  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto">
              <div className="upper">
                <div className="left">
                  <h1>Popular 3D Collections</h1>
                </div>
                <div className="right">
                  <button><img src=".\assests\rocket.png" alt="img" className="img-fluid" />Explore All</button>
                </div>
              </div>
            
         
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card1.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\avatar1.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Shopping Set #21</h6>
                      <p>Created by Justin William</p>
                      <div className="inner_icon">
                        <img src=".\assests\Cards\icon1.png" alt="img" className="img-fluid" />
                        <img src=".\assests\Cards\icon2.png" alt="img" className="img-fluid" />
                      </div>
                    </div>
                    <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>372</p>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card8.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\Avatar.svg" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>GT cars Vol. 3</h6>
                      <p>Created by Dennis93</p>
                      <div className="inner_icon">
                        <img src=".\assests\Cards\icon1.png" alt="img" className="img-fluid" />
                        <img src=".\assests\Cards\icon2.png" alt="img" className="img-fluid" />
                      </div>
                    </div>
                    <div className="likes">
                    <img src=".\assests\Cards\heart-red.png" alt="img" className="img-fluid" />
                    <p>221</p>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card9.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\avatar3.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Mars Settlement</h6>
                      <p>Created by GrafxMars</p>
                      <div className="inner_icon">
                        <img src=".\assests\Cards\icon1.png" alt="img" className="img-fluid" />
                        <img src=".\assests\Cards\icon2.png" alt="img" className="img-fluid" />
                      </div>
                    </div>
                    <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>409</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
