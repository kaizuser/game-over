import React from 'react';
import '../../styles/buttonHero.css';
import '../../styles/callToAction.css';
import { Link } from "react-router-dom";

function CallToAction() {
  
  return (
    <>
        <div className="hero-container">
            <div className="hero1">
            <img className='img-hero' src={process.env.PUBLIC_URL + "/hero-image3.png"}></img>
            </div>
            <div className="hero-text">
              <div className='container-paragraphs'>
                <p className='hero-paragraph'>¿Looking for the best games and prices?</p>
                <p className='hero-paragraph'>¡You've come to the right place!</p>
              </div>
              <Link to="/games" className='text-reset'>
                <div className='hero-anchor' href="#scroll3"><button className='hero-button hero-button2'>Check Games</button></div>
              </Link>
            </div>
        </div>
    </>
  );
}

export default CallToAction;
