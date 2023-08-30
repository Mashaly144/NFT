import React, { useRef, useEffect, useState } from 'react';
import Card from './card';
import { followers } from '../constant/data';
import { motion } from 'framer-motion';
import Followers from './Followers';

const FollowersWrraper = () => {

  return (
    <div className='followers-wrraper'>
      <motion.div>
        <motion.div className='follower-inner-carousel'>
          {followers.map((follower, index) => (
            <Followers key={index} followerData={follower} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FollowersWrraper;
