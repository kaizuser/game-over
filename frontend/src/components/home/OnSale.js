import "../../styles/onSale.css";
import React from 'react'
import gamesActions from '../../redux/actions/gamesActions.js'
import {connect} from 'react-redux'

class OnSale extends React.Component{

  constructor(props){
	  super(props)
  }

  componentDidMount(){
	  this.props.fetchGames()
	  this.gameList = ['Monster Hunter: World', 'Hades', 'Mario Party Superstars', 'Mortal Kombat 11']
  }

  render(){
	  console.log(this.props)
	  return (
	    <div className="onSaleContainer">
	      <div className="onSaleTitle">
		<h1> aca va la imagen de on sale </h1>
	      </div>
	      <div className="onSaleCardsDisplay">
		{this.props.games && this.gameList && this.props.games.map((game) => {
		  if(this.gameList.includes(game.gameName)){
			  return(
			  <>
			  <div className="onSaleCard">
				  <div className="cardImage">
				    <img src={process.env.PUBLIC_URL+`/assets/gamesImages/` + game.src}></img>
				  </div>
				  <div className="cardInfo">
				    <div className="cardName">
					<h1>{game.gameName}</h1>
				    </div>
				    <div className="cardPrice">
				      <div className="cardDiscount">
					<h2> 60% </h2>
				      </div>
				      <div className="prices">
					<h4 className="oldPrice"> $33.00 USD</h4>
					<h3> $ {game.price} USD</h3>
				      </div>
				    </div>
					  <button className="cardbutton" onClick={() => this.props.addToShop(game)}> ADD TO CART </button>
				    </div>
			    </div>
			    </>
			  )
		  }
		})	
		}	
	      </div>
	    </div>
	  );
  }
};

const mapStateToProps = (state) => {
    return {
	    games:state.gamesReducer.games,
	    inShopGames:state.gamesReducer.inShopGames
    }
}

const mapDispatchToProps = {
	fetchGames:gamesActions.fetchGames,
	addToShop:gamesActions.addToShop
}

export default connect(mapStateToProps, mapDispatchToProps)(OnSale);
