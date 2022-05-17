import React, { useState } from "react";

import "./popular.scss";

const Popular = () => {


  return (
    <>
      <section className="popular">
        <div className="container-fluid padd">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto">
              <div className="upper">
                <div className="left">
                  <h1>Popular  NFTs 🔥</h1>
                </div>
              </div>
              <div className="down">
                  <button>Trending</button>
                  <button>Furniture</button>
                  <button>Yachts</button>
                  <button>Supercars</button>
                  <button>Jewellery</button>
                  <button>Real Estate</button>
                  <button>Private Jets</button>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="inner-imgs">
                    <img src=".\assests\card2.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\avatar3.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Mars Rocket</h6>
                      <p>Created by GrafxMars</p>
                      <div className="inner_icon">
                      <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>372</p>
                    </div>
                    <div className="right">
                    <img src=".\assests\card-icon.png" alt="img" className="img-fluid" />
                    <p>1.760 VIA$</p>
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
                    <img src=".\assests\card3.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\avatar1.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Fashion Store</h6>
                      <p>Created by Justin William</p>
                      <div className="inner_icon">
                      <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>12k</p>
                    </div>
                    <div className="right">
                    <img src=".\assests\card-icon.png" alt="img" className="img-fluid" />
                    <p>3.360 VIA$</p>
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
                    <img src=".\assests\card4.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\avatar1.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Dior Vibe Classic</h6>
                      <p>Created by Justin William</p>
                      <div className="inner_icon">
                      <div className="likes">
                    <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid" />
                    <p>55k</p>
                    </div>
                    <div className="right">
                    <img src=".\assests\card-icon.png" alt="img" className="img-fluid" />
                    <p>560 VIA$</p>
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

export default Popular;
