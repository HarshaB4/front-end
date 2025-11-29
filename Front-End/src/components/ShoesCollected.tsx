import React from "react";
import "../styles/ShoesCollected.css";
import worldMap from "../assets/wordmap1111111-removebg-preview.png"
import shoes4 from "../assets/shoes4.jpg"
const ShoesCollected: React.FC = () => {
  return (
    <div className="shoes-section">
      
      <img
        src={worldMap}
        alt="world map"
        className="world-map"
      />

      
      <div className="floating-card">
        <img
          src={shoes4}
          alt="shoe"
          className="floating-card-img"
        />

        <p className="floating-card-text">
          Emma Simpson collected one pair of Cool Shoes.
        </p>
      </div>

      
      <div className="center-text">
        <h1 className="big-number">11,658,467</h1>
        <p className="sub-text">Shoes Collected</p>
      </div>
    </div>
  );
};

export default ShoesCollected;
