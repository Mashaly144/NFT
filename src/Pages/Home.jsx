import React from 'react';
import CardWrraper from '../components/CardWrraper';
import FollowersWrraper from '../components/FollowersWrraper';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Home = () => {
  return (
    <div className='w-full p-2'>
      <Header />
      <CardWrraper />
      <FollowersWrraper />
      <Footer />
    </div>
  );
};

export default Home;
