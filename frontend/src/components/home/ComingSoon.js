import React, {useEffect, useState} from "react";
import "../../styles/comingSoon.css";
import gamesActions from '../../redux/actions/gamesActions.js'
import {connect} from 'react-redux'

const ComingSoon = (props) => {

  useEffect(() => {
    props.fetchGames()
  }, []);

  const listGame = ['Aftermath', 'Evil Dead: The game','S.T.A.L.K.E.R. 2: Heart of Chernobyl', 'Chrono Cross: The Radical Dreamers']

  const {
    games, inShopGames 
   } = props

  return (
    <div className="comingSoonContainer">
      <div>
      <img src={process.env.PUBLIC_URL + "/comingsoon.png"} className='coming-soon-title' />
    </div>
    <div className="aver">
    {props.games?.map((game)=>{
      if(listGame.includes(game.gameName)){
        return( 
	<div className="wrapper" key={game._id}>
      
      
            <div className="overviewInfo">
                <div className="productImage">
                  <img src={process.env.PUBLIC_URL + "/assets/gamesImages/"+ game.src} alt="product: ps5 controller image" />
                </div>
      
      
            </div>
      
            <div className="productSpecifications">
              <h1>{game.gameName}</h1>
              <div className='genres-comingsoon'>

              {game.genre.map((genre)=>
              <p key={Math.random()}>{genre}</p>
              )}
              </div>
              <div className="checkoutButton">
                <div className="priceTag">
                  <span>$</span><p className="size-price-comingsoon">{game.price}</p><span>USD</span>
                </div>
                <button className="preorder">
                  <p>Pre-order</p>
                  {/* <div className="buttonaction">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div> */}
                </button>
              </div>
            </div>
      
          </div>
          )
      }
    })}
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    games:state.gamesReducer.games,
  }
}

const mapDispatchToProps = {
fetchGames:gamesActions.fetchGames,
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);
