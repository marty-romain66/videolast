import React, { useState } from 'react';


const HeartComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="stage">
      <div
        className={`heart w-100 h-100 bg-url(/heart.png) bg-no-repeat cursor-pointer transition duration-1000 steps-28 ${
          isActive ? 'bg-position-2800px' : 'bg-position-0'
        }`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default HeartComponent;