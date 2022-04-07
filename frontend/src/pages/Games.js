import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import Cards from '../components/games/Cards'
import {Link} from 'react-router-dom'
 
import gamesActions from '../redux/actions/gamesActions'

import '../styles/gamesCards.css'

class Games extends React.Component{

	constructor(props){
		super(props)
	}

	componentDidMount(){
	        window.scrollTo({top: 0, behavior: "smooth"})
		this.props.fetchGames()
	}

	render (){
		return ( 
			<>
				{this.props.games && this.props.games.map((game) => 

				<div className="container-cards" key={game._id}>
					<div className="card">
					    <div className="card__header">
						<img src={process.env.PUBLIC_URL+"/assets/gamesImages/" + game.src} alt="card__image" className="card__image" />
					    </div>
					    <div className="card__body">
							{game.genre.map((genre) => 
							<span className="tag tag-blue" key={genre}>
								{genre}
							</span>
							)}
						<h4 className='titleGame'>{game.gameName}</h4>
					    </div>
					    <div className="card__footer">

						<Link to={'/gamesdetails/' + game._id}>
						<button className="vm">
						    Explore me
						</button>
						</Link>
					    </div>
					</div>
				</div>

				)}
			</>

		);
	}

}

const mapStateToProps = (state) => {
    return {
	    games:state.gamesReducer.games,
	    auxiliar:state.gamesReducer.auxiliar
    }
}

const mapDispatchToProps = {
	fetchGames:gamesActions.fetchGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
