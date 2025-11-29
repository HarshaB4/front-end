import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../styles/AmazingEvents.css";
import AmazingEvent1 from "../assets/AmazingEvent1.jpg"
import AmazingEvent2 from "../assets/AmazingEvent2.jpeg";
import AmazingEvent3 from "../assets/AmazingEvent3.jpeg";  
import AmazingEvent4 from "../assets/AmazingEvent4.jpg";
const events = [
  {
    category: "Ipsum",
    title: "Varius est diam",
    image: AmazingEvent1,
  },
  {
    category: "Purus",
    title: "Diam felis tempus",
    image: AmazingEvent2,
  },
  {
    category: "Urna",
    title: "Vel nulla varius",
    image: AmazingEvent3,
  },
  {
    category: "Vitae",
    title: "Amet tristique a",
    image: AmazingEvent4,
  },
];

function AmazingEvents() {
  return (
    <div className="events-container">
    
      <div className="events-header">
        <h1 className="events-title">Amazing events</h1>

        <div className="events-explore">
          <span>Explore Articles</span>
           <ArrowForwardIcon className="arrow-icon" />
        </div>
      </div>

      
      <div className="events-card-grid">
        {events.map((event) => (
          <div className="event-card" key={event.title}>
            <p className="event-category">{event.category}</p>
            <h3 className="event-heading">{event.title}</h3>

            <img src={event.image} alt={event.title} className="event-image" />

            <div className="buy-section">
              <span className="buy-text">Buy Tickets</span>
              <ArrowForwardIcon className="arrow-buy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmazingEvents;
