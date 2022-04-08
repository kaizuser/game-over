import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import gamesActions from '../redux/actions/gamesActions'
import FilterGames from '../components/games/filterGames'
import '../styles/gamesCards.css'
import styled from 'styled-components'

class Games extends React.Component {

	state = {
		genreColors:['blue', 'red', 'green']
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
							<div className="card" key={game._id}>
								<div className="card__header">
									<img src={process.env.PUBLIC_URL + "/assets/gamesImages/" + game.src} alt="card__image" className="card__image" />
								</div>
								<div className="card__body">
									<div className="tag-container">
										{game.genre.map((genre) =>
										<span className="tag tag-blue" key={genre} style={{background:this.state.genreColors[game.genre.indexOf(genre)]}}>
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

				<h1>No games found</h1>

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
