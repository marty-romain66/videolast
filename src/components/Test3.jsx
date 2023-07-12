import React, { useState, useEffect } from 'react';

const Test3 = ({ items, itemWidth, itemHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 3000); // Définis ici l'intervalle de défilement des images (en millisecondes)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, items.length]);

  return (
    <div className="carousel" style={{ height: `${itemHeight}px` }}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
        >
          <img src={item} alt={`Carousel Item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Test3;