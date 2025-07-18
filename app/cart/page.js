"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
    // Listen for updates
    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItems(updated);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "24px" }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {cartItems.map((item, idx) => (
            <div key={idx} className="gridcard-container" style={{ width: "340px" }}>
              <Image
                src={item.imageURL}
                alt={item.name}
                className="gridcard-image"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <p className="gridcard-name">{item.name}</p>
              <p className="gridcard-categories">{item.categories}</p>
              <p className="gridcard-price">₹{item.price} for two</p>
              <div className="gridcard-bottom">
                <div className="gridcard-rating">{item.rating}* Rating</div>
                <div className="gridcard-duration">{item.deliveryDuration} for delivery</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;