import React from 'react';
import Image from 'next/image';

const SideCrousel = ({food}) => {
  return (
    <div>
      <div className="slidecrousel-wrapper">
        <div className="slidecrousel-container">
          <Image
            src={food.imageURL}
            alt={food.name}
            className="slidecrousel-image"
            width={500}
            height={300}
            style={{ objectFit: 'cover' }}
          />
          <p className="slidecrousel-name">{food.name}</p>
        </div>
      </div>
    </div>
  )
}

export default SideCrousel;