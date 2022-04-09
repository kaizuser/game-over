import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {React, useEffect, useState} from 'react'
import './App.css';

import {connect} from 'react-redux'
import usersActions from './redux/actions/usersActions.js'

import Error from './components/general/Error'
import Footer from "./components/general/Footer"
import NavBar from './components/general/Navbar.js'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs.js'
import Games from './pages/Games.js'
import GamesDetails from './pages/GamesDetails.js'
import UsersForm from './pages/UsersForm'

function App(props) {

	useEffect(() => {
	    if(localStorage.getItem('token')!== null){
	      const token = localStorage.getItem("token")
	      props.verifyToken(token)
	    }
	},[])

	return (
		<>
			<BrowserRouter>

				<NavBar/>

				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/home' element={<Home/>}/>
					<Route path='/aboutus' element={<AboutUs/>}/>
					<Route path='/games' element={<Games/>}/>
					<Route path='/gamesdetails/:id' element={<GamesDetails/>}/>
					<Route path='*' element={ <Error/> }/>
					<Route path='/user' element={<UsersForm/>}/>
				</Routes>


				<Footer/>

			</BrowserRouter>
		</>
	);
}

const mapDispatchToProps = {
	verifyToken: usersActions.verifyToken,

}

export default connect(null, mapDispatchToProps)(App);
