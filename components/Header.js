"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItems(items);
      setCartCount(items.length);
    };
    window.addEventListener('storage', handleStorage);
    handleStorage();
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link href="/">
          <h1 className="logo-text">
            FOODAPP
          </h1>
        </Link>
      </div>
      <nav className="header-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
        <input
          className="search-input"
          placeholder="search..."
        />
        <a href="/cart" className="nav-button" onClick={handleCartClick}>
          Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
        </a>
        {showCart && cartItems.length > 0 && (
          <div className="cart-dropdown">
            {cartItems.map((item, idx) => (
              <div key={idx} className="cart-item">
                <img src={item.imageURL} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">₹{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link href="/userlogin" className="nav-button">
          Login
        </Link>
        <Link href="/usersignup" className="nav-button">
          Sign Up
        </Link>
      </nav>
    </header>
  )
}

export default Header;