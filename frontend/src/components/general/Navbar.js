import React, {useEffect, useState} from "react";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import {connect} from 'react-redux'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "../../styles/navbar.css";
import userActions from "../../redux/actions/usersActions";

function Navbar(props){
	const [list, setList] = useState()
	const location = useLocation()

	useEffect(() => {
		setList(document.querySelectorAll('.list'))
	}, [])

	useEffect(() => {
		if(list){
			list.forEach((item) => {
				item.classList.remove('active')
				if(location.pathname.includes(item.id)){
					item.classList.add('active')
				}

				if(location.pathname == '/' && item.id == 'home'){
					item.classList.add('active')
				}
			})
		}
	}, [location, []])

  let activeLink = (event) => {
    list.forEach((item) =>
      item.classList.remove('active'))

    list.forEach((item) => {
	    if(event.currentTarget.className.includes(item.className) && event.currentTarget.className.length !== 0){
		    item.classList.add('active')
	    }
    })
  }

  function signOutUser(){
    props.signOutUser(props.user.email)
  }

  useEffect(() => {

  },[props.user])

  return (
    <div className="navbar">
      <div className="navigation">
        <ul>
		<li className="list" onClick={(event) => activeLink(event)} id='home'>
            <LinkRouter to="/home"> 
              <span className="icon">
                <HomeOutlinedIcon />
              </span>
              <span className="text">Home</span>
            </LinkRouter>

          </li>
          <li className='list' onClick={(event) => activeLink(event)} id='games'>
            <LinkRouter to="/games">
              <span className="icon"><SportsEsportsOutlinedIcon /></span>
              <span className="text">Games</span>
            </LinkRouter>
          </li>
          <li className='list' onClick={(event) => activeLink(event)} id='aboutus'>
            <LinkRouter to="/aboutus">
              <span className="icon"><InfoOutlinedIcon /></span>
              <span className="text">About us</span>
            </LinkRouter>
          </li> 

	  <li className='list' onClick={(event) => activeLink(event)} id='cart'>
	    <LinkRouter to="/cart">
	      <span className="icon"><ShoppingCartOutlinedIcon /></span>
	      <span className="text">Cart</span>
	    </LinkRouter>
	  </li>

          {props.user ? 

                        <li className='list' onClick={signOutUser} id='logout'>
                        <LinkRouter to="/user">
                          <span className="icon"><LogoutIcon/></span>
                          <span className="text">Log out</span>
                        </LinkRouter>
                        </li>
          
          :

          
          <li className='list' onClick={(event) => activeLink(event)} id='user'>
          <LinkRouter to="/user">
            <span className="icon"><PermIdentityOutlinedIcon /></span>
            <span className="text">Profile</span>
          </LinkRouter>
        </li>
          
          }



	  {
		  props.user && props.user.isAdmin &&
		  <li className='list' onClick={(event) => activeLink(event)} id='admin'>
		    <LinkRouter to="/admin">
		      <span className="icon"><PermIdentityOutlinedIcon /></span>
		      <span className="text">Profile</span>
		    </LinkRouter>
		  </li>
	  }

          <div className="indicator" />
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
	return{
		user:state.usersReducer.user
	}
}

const mapDispatchToProps =  {

  signOutUser:userActions.signOutUser

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
