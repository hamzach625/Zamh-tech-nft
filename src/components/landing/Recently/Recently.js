import React, { useState } from "react";

import "./recently.scss";

const Recently = () => {


  return (
    <>
      <section className="recently">
        <div className="container-fluid padd-l">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto">
              <div className="upper">
                <div className="left">
                  <h1>Explore Recently Listed</h1>
                </div>
              </div>
              <div className="down">
                  <button>Category<img src=".\assests\down-arrow.png" alt="img" className="img-fluid" /></button>
                  <button>Collection<img src=".\assests\down-arrow.png" alt="img" className="img-fluid" /></button>
                  <button>Sale Type<img src=".\assests\down-arrow.png" alt="img" className="img-fluid" /></button>
                  <button>Price Range<img src=".\assests\down-arrow.png" alt="img" className="img-fluid" /></button>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card5.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\Avatar.svg" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Chillon Castle</h6>
                      <p>Created by Pix4D</p>
                      <div className="inner_icon">
                      <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>28k</p>
                    </div>
                    <div className="right">
                    <img src=".\assests\card-icon.png" alt="img" className="img-fluid" />
                    <p>420 VIA$</p>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-btn">
                    <button><img src=".\assests\crown.png" alt="img" className="img-fluid" />Place Bid</button>
                    </div>
                </div>
              </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card6.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\Avatar.svg" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Emperor August</h6>
                      <p>Created by Geoffrey</p>
                      <div className="inner_icon">
                      <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>32k</p>
                    </div>
                    <div className="right">
                    <img src=".\assests\card-icon.png" alt="img" className="img-fluid" />
                    <p>435 VIA$</p>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-btn">
                    <button><img src=".\assests\crown.png" alt="img" className="img-fluid" />Place Bid</button>
                    </div>
                </div>
              </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card7.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\Avatar.svg" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>GT coupe breake</h6>
                      <p>Created by Dennis93</p>
                      <div className="inner_icon">
                      <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>10K</p>
                    </div>
                    <div className="right">
                    <img src=".\assests\card-icon.png" alt="img" className="img-fluid" />
                    <p>4,124 VIA$</p>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-btn">
                    <button><img src=".\assests\crown.png" alt="img" className="img-fluid" />Place Bid</button>
                    </div>
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

export default Recently;
