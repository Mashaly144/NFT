import React from 'react';
import Nav from '../components/Nav';
import NavBar from '../components/NavBar';
const Header = () => {
  return (
    <header className='p-[15px] space-y-8 w-full'>
      <NavBar />
      <Nav />
    </header>
  );
};

export default Header;
