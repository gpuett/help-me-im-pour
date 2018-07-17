import React from 'react';
import { Link } from 'react-router-dom';
import Beer from './../assets/images/beer.jpg';

function Header() {
  return(
    <div>
      <style jsx>{`
        .header-wrapper {
          
        }
        `}</style>
        <div className='header-wrapper'>
          <h1>Help Me, I'm Pour</h1>
          <Link to='/'>Current Deals</Link> | <Link to='/bars'>All Bars</Link>
        </div>
    </div>
  );
}

export default Header;
