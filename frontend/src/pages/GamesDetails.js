import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import '../styles/gamesDetails.css';
import Left from '@mui/icons-material/ChevronLeft';
import Right from '@mui/icons-material/ChevronRight';
const GamesDetails = (props) => {

    window.scrollTo({top: 0, behavior: "smooth"})

    return ( 
        <div className="details-container">
            <div className="product-details">
                <ul className="details-menu-list">
                    <li className="text-home-container"><a className="text-home">Home</a>/Product details</li>
                    <li className="text-product-details">Product Details</li>
                    <li className="next-product-container">
                        <ul className="next-product-list">
                            <li className="next-product"><p>Next Product</p></li>
                            <li className="left-right"><Left/> <Right/></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="product-container">
                <div className="product-detail-info">
                    <h3>
                    Batman: The Enemy Within
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <img src="https://ca-times.brightspotcdn.com/dims4/default/5cf8f07/2147483647/strip/true/crop/6000x4000+0+0/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7a%2Ff9%2F6880412a43b6aa82e372c0c782a1%2Fthebatmanzoekravitzrobertpattinson.jpg"/>
                        <img src="https://www.cinemascomics.com/wp-content/uploads/2022/01/trailer-the-batman-960x720.jpg.webp"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Batman_cosplay_-_Masked_Mateo_-_Photo_Jonin.jpg/800px-Batman_cosplay_-_Masked_Mateo_-_Photo_Jonin.jpg"/>
                    </div>
                </div>
                <div className="product-image">
                    <div className="product-circle">
                        <div className="product-circle-child">
                            <h4>*imagen principal*</h4>
                        </div>
                    </div>
                </div>
                <div className="product-detail-cart">
                    <button className="btn add-to-cart">
                        Add to cart
                    </button>
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
