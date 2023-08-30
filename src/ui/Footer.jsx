import React from 'react';
import {
  AiFillHome,
  AiFillProject,
  AiFillHeart,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer_container'>
        <li className='footer_link'>
          <AiFillHome />
        </li>
        <li className='footer_link'>
          <AiFillProject />
        </li>
        <AiOutlinePlus className='footer_add' />
        <li className='footer_link'>
          <AiFillHeart />
        </li>
        <li className='footer_link'>
          <BsFillPersonFill />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
