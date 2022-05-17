import React, { useState } from "react";

import "./top.scss";

const Top = () => {


  return (
    <>
      <section className="top">
        <div className="container-fluid padd">
          <div className="row">
            <div className="col-xl-11 col-12 m-auto">
              <div className="upper">
                <div className="left">
                  <h1>Top Sellers</h1>
                </div>
                <div className="right">
                    <p>1 VIA = 10,000 VIA$</p>
                </div>
              </div>
              <div className="row">
              <div className="allcards">
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\seller-p.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Patrick R.</h6>
                      <p>VIA$ 242K</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p2.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Matrix888</h6>
                      <p>VIA$ 202K</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p3.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Dennis93</h6>
                      <p>VIA$ 128K</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p4.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Justin W.</h6>
                      <p>VIA$ 102K</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p5.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Sarah P.</h6>
                      <p>VIA$ 89,212</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p6.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Jena K.</h6>
                      <p>VIA$ 78,293</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p7.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>Riven90</h6>
                      <p>VIA$ 72,930</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className="bottom-cards">
                <div className="cards">
                  <div className="bottom-item">
                    <div className="profile">
                      <img src=".\assests\p8.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="text">
                      <h6>GoldenStar</h6>
                      <p>VIA$ 68,029</p>
                    </div>
                  </div>
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

export default Top;
