import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import gamesActions from '../redux/actions/gamesActions'
import '../styles/gamesCards.css'

class Games extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		window.scrollTo({ top: 0, behavior: "smooth" })
		this.props.fetchGames()
	}
	render() {
		return (
			<div className="render-cards">

				<div className="container-cards" >
					<div className="search-filter">

					</div>
					{this.props.games && this.props.games.map((game) =>
						<div className="card" key={game._id}>
							<div className="card__header">
								<img src={process.env.PUBLIC_URL + "/assets/gamesImages/" + game.src} alt="card__image" className="card__image" />
							</div>
							<div className="card__body">
								<div className="tag-container">
									{game.genre.map((genre) =>
										<span className="tag tag-blue" key={genre}>
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

		);
	}

}

const mapStateToProps = (state) => {
	return {
		games: state.gamesReducer.games,
		auxiliar: state.gamesReducer.auxiliar
	}
}

const mapDispatchToProps = {
	fetchGames: gamesActions.fetchGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
