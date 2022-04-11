import React from 'react'
import { connect } from 'react-redux'
import '../styles/cart.css';

class Cart extends React.Component {

	constructor(props) {
		super(props)
		this.state = { price: 0 }
	}

	componentDidMount() {
		if (this.props.inShopGames) {
			let iterator = 0

			this.props.inShopGames.map((game) => {
				iterator += game.price

			})

			this.setState({ price: iterator })
		}
	}

	render() {
		return (
			<div className="cart-container">
				<div className="cart-container-child">
					<div className="articles-container">
						{this.props.inShopGames && this.props.inShopGames.map((game) =>
							<div key={game._id} className='article-container'>
								<img src={process.env.PUBLIC_URL + "/assets/gamesImages/" + game.src} className='article-img' />
								<div className='name-price'>
									<h4 className="article-name">{game.gameName}</h4>
									<p className="article-price">${game.price}</p>
								</div>
							</div>
						)}
					</div>
					<div className='article-total'>
						<h6>Total</h6>
						<h1 className="total">{this.state.price.toFixed(2)}</h1>
					</div>
				</div>
			</div>
		)
	}


}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
	return {
		inShopGames: state.gamesReducer.inShopGames
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
