import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import '../styles/gamesDetails.css';
import Left from '@mui/icons-material/ChevronLeft';
import Right from '@mui/icons-material/ChevronRight';
import gamesActions from '../redux/actions/gamesActions'

const GamesDetails = (props) => {

    console.log(props)

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
                                        <li className="text-genres" key={genres}>{genres}</li>
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
                                            <img src={process.env.PUBLIC_URL + "/assets/productImages/" + imgs} />
                                        )}
                                    </div>
                                </div>
                                <div className="product-detail-info">
                                    <div>
                                        <h4>Workson:
                                            {game.games.workson}
                                        </h4>
                                        <p></p>
                                        <h4>Company:
                                            {game.games.company}
                                        </h4>
                                        <p></p>
                                        <h4>Size:
                                            {game.games.size}
                                        </h4>
                                        <p></p>
                                        <div className='list-req'>
                                            {/* {game.games.requirements.map((req)=>
                                                <p className="product-item">
                                                    {req.processador}
                                                </p>)} */}
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
