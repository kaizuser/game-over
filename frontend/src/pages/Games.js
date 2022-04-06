import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import Error from "../components/general/Error"

const Games = (props) => {

    return ( 
        <>
    <Error />  
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