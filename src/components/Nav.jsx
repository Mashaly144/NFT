import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav_container'>
        <li className='nav_link'>
          <a>All</a>
        </li>
        <li className='nav_link'>
          <a>Music</a>
        </li>
        <li className='nav_link'>
          <a>Sports</a>
        </li>
        <li className='nav_link'>
          <a>Domains</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
