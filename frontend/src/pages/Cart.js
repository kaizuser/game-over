import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component{

	constructor(props){
		super(props)
		this.state={price:0}
	}

	componentDidMount(){
		if(this.props.inShopGames){
			let iterator = 0

			this.props.inShopGames.map((game) => {
				iterator += game.price

			})

			this.setState({price:iterator})
		}
	}

	render(){
		return(
			<>
				{this.props.inShopGames && this.props.inShopGames.map((game) => 
					<div key={game._id}>
						<h1>{game.gameName}</h1>
						<h1>{game.price}</h1>
					</div>
				) 


				}

				<h1>{this.state.price}</h1>

			</>
		)
	}
	

}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
	return {
		inShopGames:state.gamesReducer.inShopGames
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
