import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import "../../styles/navbar.css";

function Navbar() {
  const list = document.querySelectorAll('.list')
  function activeLink() {
    list.forEach((item) =>
      item.classList.remove('active'))
    this.classList.add('active')
  }
  list.forEach((item) =>
    item.addEventListener('click', activeLink))

  return (
    <div className="navbar">
      <div className="navigation">
        <ul>
          <li className="list active">
            <LinkRouter to="/home"> 
              <span className="icon">
                <HomeOutlinedIcon />
              </span>
              <span className="text">Home</span>
            </LinkRouter>

          </li>
          <li className='list'>
            <LinkRouter to="/games">
              <span className="icon"><SportsEsportsOutlinedIcon /></span>
              <span className="text">Games</span>
            </LinkRouter>
          </li>
          <li className='list'>
            <LinkRouter to="/aboutus">
              <span className="icon"><InfoOutlinedIcon /></span>
              <span className="text">About  Us</span>
            </LinkRouter>
          </li>
          <li className='list'>
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

export default Navbar;
