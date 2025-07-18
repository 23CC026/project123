import React from 'react'

const SideCrousel = ({food}) => {
  return (
    <div>
      <div className="slidecrousel-wrapper">
        <div className="slidecrousel-container">
          <img src={food.imageURL} alt={food.name} className="slidecrousel-image" />
          <p className="slidecrousel-name">{food.name}</p>
        </div>
      </div>
    </div>
  )
}

export default SideCrousel;