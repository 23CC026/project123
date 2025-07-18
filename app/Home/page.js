"use client";

import Link from 'next/link';
import { useState } from 'react';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to FOODAPP!</h1>
      <p className="home-desc">Your favorite food delivered fast.</p>
    </div>
  );
}

export default HomePage;
