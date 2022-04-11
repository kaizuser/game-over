import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import gamesActions from '../redux/actions/gamesActions'

import FilterGames from '../components/games/filterGames'
import NoGames from '../components/general/NoGames'
import  UploadGames from './UploadGames'



class Admin extends React.Component{
	constructor(props){
		super(props)
		
	        this.genreColors = {
                        'Action': 'linear-gradient(135deg, #17ead9 0%,#6078ea 100%)',
                        'Action RPG':'linear-gradient(135deg, #FF57B9 0%,#A704FD 100%)',
                        'Adventure': 'linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%)',
                        'Building':'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)',
                        'Fantasy':'linear-gradient(135deg, #42e695 0%,#3bb2b8 100%)',
                        'Historical': 'linear-gradient(135deg, #b1ea4d 0%,#459522 100%)',
                        'Indies':'linear-gradient(135deg, #E3E3E3 0%,#5D6874 100%)',
                        'Multiplayer':'linear-gradient(135deg, #fad961 0%,#f76b1c 100%)',
                        'MOBA':'linear-gradient(147deg, #990000 0%, #ff0000 74%)',
                        'Mystery': 'linear-gradient(316deg, #6c33a3 0%, #8241b8 74%)',
                        'Open World':'linear-gradient(316deg, #c86fc9 0%, #f79ad3 74%)',
                        'Party':'linear-gradient(319deg, #91d370 0%, #bca0ff 37%, #f2cd54 100%)',
                        'Strategy':'linear-gradient(135deg, #f2d50f 0%,#da0641 100%)',
                }
	}

	componentDidMount(){
		this.props.fetchGames()
	}

	render(){

		
		if(this.props.games.length >= 1){
			return (
				<>
				<p>ADMIN PANEL</p>
				<UploadGames/>
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
										<span className="tag tag-blue" key={genre} style={{background:this.genreColors[genre]}}>
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

const mapDispatchToProps = {
	fetchGames:gamesActions.fetchGames,
	deleteGames:gamesActions.deleteGame,
	filterGames:gamesActions.filterGames,
	setGame:gamesActions.setGame,
	modifyGame:gamesActions.modifyGame,


}

const mapStateToProps = (state) => {
	return {
		games:state.gamesReducer.games,
		auxiliar:state.gamesReducer.auxiliar
		
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin)
