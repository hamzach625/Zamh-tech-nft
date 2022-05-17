import React, { useState } from "react";

import "./featured.scss";

const Featured = () => {


  return (
    <>
      <section className="featured">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto">
              <div className="upper">
                <div className="left">
                  <h1>Featured Creators 💎</h1>
                </div>
                <div className="right">
                  <button>View All Creators</button>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                <img src=".\assests\card-rounded.png" alt="img" className="img-fluid card-rounded" />
                <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid like" />
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\c1.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Patrick R.</h6>
                      <p>@patthegooch</p>
                    </div>
                  </div>
                  <div className="bottom-text">
                      <p>341ARTWORKS</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                <img src=".\assests\card-rounded.png" alt="img" className="img-fluid card-rounded" />
                <img src=".\assests\Cards\heart-red.png" alt="img" className="img-fluid like" />
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\c2.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Justin W.</h6>
                      <p>@justinweru</p>
                    </div>
                  </div>
                  <div className="bottom-text">
                      <p>341ARTWORKS</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                <img src=".\assests\card-rounded.png" alt="img" className="img-fluid card-rounded" />
                <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid like" />
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\c3.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Steph Q.</h6>
                      <p>@querysteph</p>
                    </div>
                  </div>
                  <div className="bottom-text">
                      <p>341ARTWORKS</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                <img src=".\assests\card-rounded.png" alt="img" className="img-fluid card-rounded" />
                <img src=".\assests\Cards\heart.png" alt="img" className="img-fluid like" />
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\c4.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Patricia R.</h6>
                      <p>@pattiethea</p>
                    </div>
                  </div>
                  <div className="bottom-text">
                      <p>341ARTWORKS</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default Featured;
