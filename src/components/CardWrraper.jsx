import React, { useRef, useEffect, useState } from 'react';
import CardUser from './CardUser';
import { cardData } from '../constant/data';
import { motion } from 'framer-motion';

const CardWrraper = () => {
  const carouselRef = useRef();
  const ItemsRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - 390);
    // console.log(ItemsRef.current.offsetWidth);
    // console.log(width);
  }, []);

  return (
    <div className='w-full'>
      <div className='flex-between py-2'>
        <h1>Live Biddings</h1>
        <button>See All</button>
      </div>
      <motion.div
        ref={carouselRef}
        whileTap={{ cursor: 'grabbing' }}
        className='carousel'
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel '
          ref={ItemsRef}
        >
          {cardData.map((card, index) => (
            <CardUser key={index} cardData={card} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardWrraper;
