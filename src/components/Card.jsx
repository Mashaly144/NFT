import React from 'react';
import { BiShare } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
const Card = ({ cardData }) => {
  return (
    <div className='card flex-1'>
      <div>
        <img src={cardData.imgCard} alt='' />
        <div className='flex-between items-start p-2 w-full pb-7 pt-2 gap-6'>
          <div className='flex justify-between items-start flex-col gap-2'>
            <p>{cardData.name}</p>
            <h1>{cardData.userName}</h1>
          </div>
          <div className='flex justify-between items-start flex-col gap-2'>
            <p className=''>Current Price</p>
            <h1 className='text-primaryGreen'>{cardData.price}ETH</h1>
          </div>
        </div>
        <div className='btn_holder flex-between'>
          <button className='card_main_btn'>Place Bid</button>
          <div className='flex-between gap-2'>
            <AiOutlineLike className='card_btn' />
            <BiShare className='card_btn' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
