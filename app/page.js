"use client";
import React, { useEffect } from 'react'
import SlideCrousel from '@/components/SlideCrousel';
import GridCard from '@/components/GridCard';
import Foods from '@/components/foods.json';

const page = () => {
  useEffect(() => {
    // Save foods.json to localStorage if not already present
    if (!localStorage.getItem('foods')) {
      localStorage.setItem('foods', JSON.stringify(Foods));
    }
  }, []);

  // Fetch foods from localStorage for rendering
  const foods = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem('foods') || '[]')
    : Foods;

  return (
    <div>
      <div className="top-restaurant-header">
        <p className="top-restaurant-title">Top restaurant chains in Coimbatore</p>
        <div className="top-restaurant-arrows">
          <p className="arrow arrow-left">←</p>
          <p className="arrow arrow-right">→</p>
        </div>
      </div>
      <div className="sidecrousel-wrapper">
        {
          foods.map((food) => (
            <div key={food.name}>
              <SlideCrousel food={food} />
            </div>
          ))
        }
      </div>
      <h1 className="restaurant-list-title">Restaurants with online food delivery in Coimbatore</h1>
      <div className="card-wrapper">
        {
          foods.map((food) => (
            <div key={food.name}>
              <GridCard food={food} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page