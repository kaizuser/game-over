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
                            <li className="left"><Left/> <Right/></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="product-container">
                <div className="product-detail-info"></div>
                <div className="product-image">
                    <div className="product-circle">
                        <div className="product-circle-child"></div>
                    </div>
                </div>
                <div className="product-detail-cart"></div>
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
