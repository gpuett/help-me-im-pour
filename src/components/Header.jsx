import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
      <div className='header-wrapper'>
        <h1>Help Me, I'm Pour</h1>
        <Link to='/'>Current Deals</Link> | <Link to='/bars'>All Bars</Link>
      </div>
  );
}

export default Header;
