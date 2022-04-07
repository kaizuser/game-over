import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import gamesActions from '../redux/actions/gamesActions'
import '../styles/gamesCards.css'
import styled from 'styled-components'

class Games extends React.Component {

	constructor(props) {
		super(props)
		this.genreColors = ['blue', 'red', 'green', ]
	}

	componentDidMount() {
		window.scrollTo({ top: 0, behavior: "smooth" })
		this.props.fetchGames()
	}

	render(){
		return (
			<>
			<div className="render-cards">
				<div className="container-cards" >
					<div className="search-filter">

					<input onChange={(event) => this.props.filterGames(this.props.auxiliar, event.target.value)}/>
					</div>
					{this.props.games && this.props.games.map((game) =>
						<div className="card" key={game._id}>
							<div className="card__header">
								<img src={process.env.PUBLIC_URL + "/assets/gamesImages/" + game.src} alt="card__image" className="card__image" />
							</div>
							<div className="card__body">
								<div className="tag-container">
									{game.genre.map((genre) =>
									<span className="tag tag-blue" key={genre} style={{background:this.genreColors[game.genre.indexOf(genre)]}}>
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
