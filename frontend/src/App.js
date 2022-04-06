import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {React} from 'react'
import './App.css';
import Error from './components/general/Error'
import Footer from "./components/general/Footer"
import NavBar from './components/general/Navbar.js'
import Home from './pages/Home';
import LogIn from './pages/LogIn.js'
import SignUp from './pages/SignUp.js'
import AboutUs from './pages/AboutUs.js'
import Games from './pages/Games.js'
import GamesDetails from './pages/GamesDetails.js'

function App() {

	return (
		<>
			<BrowserRouter>

				<NavBar/>

				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/home' element={<Home/>}/>
					<Route path='/login' element={<LogIn/>}/>
					<Route path='/signup' element={<SignUp/>}/>
					<Route path='/aboutus' element={<AboutUs/>}/>
					<Route path='/games' element={<Games/>}/>
					<Route path='/gamesdetails/:id' element={<GamesDetails/>}/>
					<Route path='*' element={ <Error/> }/>
				</Routes>

				<Footer/>

			</BrowserRouter>
		</>
	);
}

export default App;
