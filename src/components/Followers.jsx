import React, { useState } from 'react';

const Followers = ({ followerData }) => {
  const [follow, setfollow] = useState(false);
  const followHandler = () => {
    setfollow(!follow);
  };
  return (
    <div className='follower-card'>
      <div className='follower-card-container'>
        <div className='flex-between gap-4'>
          <img src={followerData.img} alt={followerData.name} />
          <div>
            <h5>{followerData.name}</h5>
            <span>{followerData.sales}</span>
          </div>
        </div>
        <button onClick={() => followHandler()}>
          {follow ? 'follow' : 'unFollow'}
        </button>
      </div>
    </div>
  );
};

export default Followers;
