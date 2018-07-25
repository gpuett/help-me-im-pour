import React from 'react';
import { Link } from 'react-router-dom';
import Glass from '../assets/images/glasses.jpg';
import './Header.css';

function Header() {
  return(
      <div className='header-wrapper'>
        <img src={Glass} alt='colorful glasses'/>
        <h1>Help Me, I'm Pour</h1>
        <div className='links-wrapper'>
          <Link to='/'>Current Deals</Link> | <Link to='/bars'>All Bars</Link> | <Link to='/NewBar'>New Happy Hour Info</Link>
        </div>
      </div>
  );
}

export default Header;
