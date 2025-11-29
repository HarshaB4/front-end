import React from "react";
import "../styles/CardSection.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoes3.jpeg";

const cards = [
  {
    img: shoe1,
    title: "Title",
    subtitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: shoe2,
    title: "Title",
    subtitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    img: shoe3,
    title: "Title",
    subtitle: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

const CardsSection = () => {
  return (
    <div className="cards-wrapper">
    
      <div className="top-header-row">
        <h2 className="heading">The best of the best</h2>

        <button className="signup-btn">Sign up now</button>
      </div>

      
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card-box" key={index}>
            <img src={card.img} alt="product" className="card-image" />

            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtitle">{card.subtitle}</p>

              <button className="buy-btn">
                <ShoppingCartOutlinedIcon className="cart-icon" />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
