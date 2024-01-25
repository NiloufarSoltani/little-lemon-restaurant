import React from 'react';
import HeroImage from "../../../assets/chef.jpg"; 

export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      />
      <div className="reserve-header-text">
        <h1>Reserve a Table</h1>
      </div>
    </header>
  );
}
