import React from 'react';
import '../../styles/callToAction.css';
import '../../styles/buttonHero.css';
import { Link } from "react-router-dom";

function CallToAction() {
  
  return (
    <>
        <div className="hero-container">
            <div className="hero1">
            </div>
            <div className='product-image hero2'>
              <img className='img-hero' src={process.env.PUBLIC_URL + "/hero-image3.png"}></img>
            </div>
            <div className="hero-text">
            {/* <img className="logo-hero" src={process.env.PUBLIC_URL+"/assets/footerImages/logofinal.png"}></img> */}
                <p className='hero-paragraph'>The best place to found your favourites games with the best prices in the market</p>
                <Link to="/games" className='text-reset'>
                  <a className='hero-anchor' href="#scroll3"><button className='hero-button hero-button2'>Click to view Games</button></a>
                </Link>
            </div>
        </div>
    </>
  );
}

export default CallToAction;
