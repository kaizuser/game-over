import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import gamesActions from '../redux/actions/gamesActions'
import FilterGames from '../components/games/filterGames'
import '../styles/gamesCards.css'
import styled from 'styled-components'
import NoGames from '../components/general/NoGames';

class Games extends React.Component {

	state = {
		genreColors: {	
			'Action': '#00C3F6', 
			'Action RPG':'#d84185',
			'Adventure': '#BA40E1', 
			'Building':'blue',
			'Fantasy':'#2ed4ad',
			'Historical': 'rgb(0, 171, 46)',
			'Indies':'rgb(101, 100, 97)',
			'Multiplayer':'#ec8837',
			'MOBA':'red',
			'Mystery': 'purple',
			'Open World':'#ec378e', 
			'Party':'rgb(147, 153, 255)',
			'Strategy':'#8ed236',
		}
		
	}

	componentDidMount() {
		window.scrollTo({ top: 0, behavior: "smooth" })

		if (this.props.games.length < 1){
			this.props.fetchGames()
		}

	}

	render(){
		if(this.props.games.length >= 1){
			return (
				<>

				<FilterGames games={this.props.auxiliar} filter={this.props.filterGames}/>

				<div className="render-cards">
					<div className="container-cards" >
						{this.props.games && this.props.games.map((game) =>
							<div className="card__gamestab" key={game._id}>
								<div className="card__header">
									<img src={process.env.PUBLIC_URL + "/assets/gamesImages/" + game.src} alt="card__image" className="card__image" />
								</div>
								<div className="card__body">
									<div className="tag-container">
										{game.genre.map((genre) =>
										<span className="tag tag-blue" key={genre} style={{background:this.state.genreColors[genre]}}>
												{genre}
											</span>
										)}
									</div>
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
						)}
					</div>

				</div>
				</>
			)
		}

		else {
			return (
				<>

				<FilterGames games={this.props.auxiliar} filter={this.props.filterGames}/>

				<NoGames />

				</>
			)
		}

	}
}
const mapStateToProps = (state) => {
	return {
		games: state.gamesReducer.games,
		auxiliar: state.gamesReducer.auxiliar
	}
}

const mapDispatchToProps = {
	fetchGames: gamesActions.fetchGames,
	filterGames: gamesActions.filterGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
