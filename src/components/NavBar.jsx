import React from 'react';
import logo from '../assets/logo.png';
import {
  MdLocationSearching,
  MdOutlineNotificationsNone,
  MdOutlineNotificationsActive,
} from 'react-icons/md';
const NavBar = () => {
  return (
    <div className='flex-between'>
      <div className='flex-between space-x-4'>
        <img className='w-[40px]' src={logo} alt='logo' />
        <h1 className='text-3xl'>8.42 ETH</h1>
      </div>
      <div className='flex-between space-x-5'>
        <MdLocationSearching className='nav_btn text-white' />
        <MdOutlineNotificationsNone className='nav_btn' />
      </div>
    </div>
  );
};

export default NavBar;
