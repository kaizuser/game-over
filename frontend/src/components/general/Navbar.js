import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import "../../styles/navbar.css";

export default class Navbar extends React.Component {
	state = {
		list:[]
	}

	componentDidMount(){
		this.setState({list:document.querySelectorAll('.list')})
	}


  activeLink = (event) => {
    this.state.list.forEach((item) =>
      item.classList.remove('active'))

    this.state.list.forEach((item) => {
	    if(event.currentTarget.className.includes(item.className) && event.currentTarget.className.length !== 0){
		    item.classList.add('active')
	    }
    })
  }



  render(){
  return (
    <div className="navbar">
      <div className="navigation">
        <ul>
		<li className="list active home" onClick={(event) => this.activeLink(event)}>
            <LinkRouter to="/home"> 
              <span className="icon">
                <HomeOutlinedIcon />
              </span>
              <span className="text">Home</span>
            </LinkRouter>

          </li>
          <li className='list games' onClick={(event) => this.activeLink(event)}>
            <LinkRouter to="/games">
              <span className="icon"><SportsEsportsOutlinedIcon /></span>
              <span className="text">Games</span>
            </LinkRouter>
          </li>
          <li className='list aboutUs' onClick={(event) => this.activeLink(event)}>
            <LinkRouter to="/aboutus">
              <span className="icon"><InfoOutlinedIcon /></span>
              <span className="text">About  Us</span>
            </LinkRouter>
          </li>
          <li className='list user' onClick={(event) => this.activeLink(event)}>
            <LinkRouter to="/user">
              <span className="icon"><PermIdentityOutlinedIcon /></span>
              <span className="text">Profile</span>
            </LinkRouter>
          </li>
          <div className="indicator" />
        </ul>
      </div>
    </div>
  );
  }
}

