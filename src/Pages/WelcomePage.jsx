import React from 'react';
import welcomeImg from '../assets/welcomeImage.png';
import { Link } from 'react-router-dom';
const WelcomePage = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='welcome-page'>
        <h2 className='text-primaryGreen text-5xl'>Welcome To NFT</h2>
        <img src={welcomeImg} alt='welcomeImg' />
        <h1>Most competitive rates.</h1>
        <p>
          A platform with the goal of establishing a novel creative economy.
        </p>
        <button>
          <Link to='/home'>Let’s Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
