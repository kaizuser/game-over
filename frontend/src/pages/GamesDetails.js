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
                    <div className="details-container">
                        <div className="product-details">
                            <ul className="details-menu-list">
                                <ul className='text-home-container'>
                                    {game.games.genre && game.games.genre.map((genres) =>
                                        <li className="text-genres" key={Math.random()}>{setGenres(genres)}</li>
                                    )}
                                </ul>
                                <li className="text-product-details">{game.games.gameName}</li>
                                <div className='price-container'>
                                    <h2>$ {game.games.price}</h2>
                                    <button className="btn add-to-cart">Add to cart</button>
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
                                        <h5>Workson: {game.games.workson}
                                        </h5>
                                        <p></p>
                                        <h5>Company: {game.games.company}
                                        </h5>
                                        <p></p>
                                        <h5>Size: {game.games.size}
                                        </h5>
                                        <div className='list-req'>
                                            <h5>
                                                Requirements:
                                            </h5>
                                            {game.games.requirements.map((req, index) =>
                                                <div key={index}>
                                                    <p className="product-item">
                                                        processor: {req.processor}
                                                    </p>
                                                    <p className="product-item">
                                                        memory: {req.memory}
                                                    </p>
                                                    <p className="product-item">
                                                        graphics: {req.graphics}
                                                    </p>
                                                    <p className="product-item">
                                                        storage: {req.storage}
                                                    </p>
                                                </div>
                                            )}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesDetails);
