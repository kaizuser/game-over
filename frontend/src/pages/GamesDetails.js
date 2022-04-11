import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import '../styles/gamesDetails.css';
import gamesActions from '../redux/actions/gamesActions'

const GamesDetails = (props) => {

    const { game } = props

    window.scrollTo({ top: 0, behavior: "smooth" })

    const { id } = useParams()

    useEffect(() => {
        props.fetchGame(id)
        // eslint-disable-next-line     
    }, []);

    return (
        <>
            {game.games && (
                <>
		<form>
                    <div className="details-container">
                        <div className="product-details">
                            <ul className="details-menu-list">
                                <ul className='text-home-container'>
                                    {game.games.genre && game.games.genre.map((genres) =>
                                        <li className="text-genres" key={Math.random()}>{genres}</li>
                                    )}
                                </ul>
                                <li className="text-product-details">{game.games.gameName}</li>
                                <div className='price-container'>
                                    <h2 className='price-gamesdetails'>$ {game.games.price} USD</h2>
					<div className="btn add-to-cart" onClick={() => props.addToShop(game.games)}>Add to cart</div>
                                </div>
                            </ul>
                        </div>
                        <div className="product-container">
                            <div className="product-container-child">
                                <div className="container-image">
                                    <img src={process.env.PUBLIC_URL + "/assets/gamesImages/" + game.games.src} alt='img' className='product-image' />
                                    <div className="container-images">
                                        {game.games.images.map((imgs) =>
                                            <img src={process.env.PUBLIC_URL + "/assets/productImages/" + imgs} key={imgs} />
                                        )}
                                    </div>
                                </div>
                                <div className="product-detail-info">
                                    <div className='list-details'>
                                        <h5 className='requirements-gamedetails'>Workson: {game.games.workson}
                                        </h5>
                                        <p></p>
                                        <h5 className='requirements-gamedetails'>Company: {game.games.company}
                                        </h5>
                                        <p></p>
                                        <h5 className='requirements-gamedetails'>Size: {game.games.size}
                                        </h5>
                                        <div className='list-req'>
                                            <h5 className='requirements-gamedetails'>
                                                Requirements
                                            </h5>
                                            {game.games.requirements.length > 1 ? 
                                            game.games.requirements.map((req, index) =>
                                                <div key={index}>
                                                    <p className="product-item">
                                                        {Object.keys(req)[0].substring(0,1).toUpperCase()}{Object.keys(req)[0].substring(1)}: {req[Object.keys(req)[0]]} {Object.keys(req)[0] === "storage" || Object.keys(req)[0] === "memory" ? "GB" : ""} 
                                                    </p>
                                                </div>
                                            )
                                            :
                                            <>
                                            <p className="product-item">
                                                Processor: {game.games.requirements[0].processor}
                                            </p>
                                            <p className="product-item">
                                                Memory: {game.games.requirements[0].memory} GB
                                            </p>
                                            <p className="product-item">
                                                Graphics: {game.games.requirements[0].graphics}
                                            </p>
                                            <p className="product-item">
                                                Storage: {game.games.requirements[0].storage} GB
                                            </p>
                                            </>
                                            
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-container-child-2">
                                <h3>About the game</h3>
                                <p>{game.games.description}</p>
                            </div>
                        </div>
                    </div>
		</form>
                </>
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        game: state.gamesReducer.game,
    }
}

const mapDispatchToProps = {
    fetchGame: gamesActions.fetchGame,
    addToShop: gamesActions.addToShop
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesDetails);
