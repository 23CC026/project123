import React from 'react';
import Image from 'next/image';
// import './GridCard.css'; // Import the CSS file for custom styles

const GridCard = ({food}) => {
  const handleAddToCart = () => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    items.push(food);
    localStorage.setItem('cartItems', JSON.stringify(items));
    window.dispatchEvent(new Event('storage'));
    alert(`Added ${food.name} to cart!`);
  };

  return (
    <div className="card-wrapper">
    <div className="gridcard-container">
      <Image
        src={food.imageURL}
        alt={food.name}
        className="gridcard-image"
        width={300}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <p className="gridcard-name">{food.name}</p>
      <p className="gridcard-categories">{food.categories}</p>
      <p className="gridcard-price">₹{food.price} for two</p>
      <div className="gridcard-bottom">
        <div className="gridcard-rating">{food.rating}* Rating</div>
        <div className="gridcard-duration">{food.deliveryDuration} for delivery</div>
      </div>
      <button className="gridcard-add-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
    </div>
  )
}

export default GridCard;