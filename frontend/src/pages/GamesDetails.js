import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import '../styles/gamesDetails.css';
import Left from '@mui/icons-material/ChevronLeft';
import Right from '@mui/icons-material/ChevronRight';
const GamesDetails = (props) => {

    window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className="details-container">
            <div className="product-details">
                <ul className="details-menu-list">
                    <li className="text-home-container">GENRES</li>
                    <li className="text-product-details">Batman: The Enemy Within</li>
                    <div className='price-container'>
                        <h2>$50</h2>
                        <button className="btn add-to-cart">Add to cart</button>
                    </div>
                </ul>
            </div>
            <div className="product-container">
                <div className="product-container-child">
                <div className="container-image">
                        <img src="http://localhost:3000/assets/gamesImages/batman.png" alt='img' className='product-image' />
                        <div className="container-images">
                            <img src="http://localhost:3000/assets/gamesImages/batman.png" />
                            <img src="http://localhost:3000/assets/gamesImages/batman.png" />
                            <img src="http://localhost:3000/assets/gamesImages/batman.png" />
                            <img src="http://localhost:3000/assets/gamesImages/batman.png" />
                        </div>
                    </div>
                    <div className="product-detail-info">
                        <div>
                            <h4>Workson:</h4>
                            <p></p>
                            <h4>Company:</h4>
                            <p></p>
                            <h4>Size:</h4>
                            <p></p>
                            <ul className='list-req'>{/* MAP DE SYSTEM REQ */}
                                <li CLASS="product-item">processor: 'Dual core 2.6 GHz Intel Pentium D or AMD Athlon 64 X2 3800+'</li>
                                <li CLASS="req-item">memory: '2 GB RAM'</li>
                                <li CLASS="req-item">graphics: 'ATI/NVIDIA 256 MB DirectX 10.0–compliant video card or DirectX 9.0–compliant card with Shader Model 3.0 or higher'</li>
                                <li CLASS="req-item">storage:'8 GB'</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-container-child-2">
                    <h3>About the game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(null, null)(GamesDetails);
