import React, { useState } from "react";

import "./last.scss";

const Last = () => {


  return (
    <>
     <section class="items">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="itemsData">
                        <p class="gcolor">Join Our Commnunity</p>
                        <h4>Decentralized NFT Marketplace
                            for Every Talented 3D Artist</h4>
                        <div class="row">
                            <div class="col-lg-8 padding-0">
                                <p>Are you a 3D artist, musician, video or sound artist? Get the best deal
                                    on the market working with us and let grow the community together.</p>
                                <div class="item_buton">
                                    <button>Join Our Community</button>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="items_img">
                                    <img src="./images/Artist.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="itemsData">
                        <p class="gcolor">Avatarization</p>
                        <h4>Digital twins, avatars and 
Non-Fungible Selfs</h4>

                        <div class="row">
                            <div class="col-lg-8 padding-0">
                                <p>Select your avatar, customize it, or body scan yourself. Then use it for your profile or sell it.</p>
                                <div class="item_buton">
                                    <button>Create Avatar</button>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="items_img">
                                    <img src="./images/Woman taking a funny photo with dog.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="itemsData">
                        <p class="gcolor">About The Marketplace</p>
                        <h4>Next Generation Decentralized
NFT Marketplace</h4>
                        <div class="row">
                            <div class="col-lg-8 padding-0">
                                <p>Designed to promote young talent and allow leading creators to bring new virtual worlds alife.</p>
                                <div class="item_buton">
                                    <button>Learn More About Us</button>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="items_img">
                                    <img src="./images/Artist.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="items_further_detail">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="itemsData">
                            <p class="gcolor">For Innovative Projects</p>
                            <h4>Apply For New NFT Listing</h4>
                            <div class="row">
                                <div class="col-lg-8 padding-0">
                                    <p>You have an amazing portfolio of 3D model, currently selling on sketchfab, cgtrader or other 3D model repository. 
Join us, mint them and list them to be used, rent or resold and empower our VirtualiaWorlds virtual worlds. 
Enjoy lifetime creator royalty!</p>
                                    <div class="item_buton">
                                        <button>Submit Your Collection</button>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="item_further_img">
                                        <img src="./images/placeholder.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="itemsData">
                            <p class="gcolor">How ca we Help You?</p>
                            <h4>Frequently Asked Questions.</h4>
                            <div class="row">
                                <div class="col-lg-8 padding-0">
                                    <p className="mg-b">You still have questions pending. Please check our FAQ or ask question to the community to help you.</p>
                                    <div class="item_buton">
                                        <button>Learn More
</button>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="item_furthers_img">
                                        <img src="./images/question mark.png" alt=""/>
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

export default Last;
