// import { Card } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import Cards from '../components/games/Cards'
const Games = (props) => {

    return ( 
        <>
        <Cards/>
        </>

    );
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(null, null)(Games);