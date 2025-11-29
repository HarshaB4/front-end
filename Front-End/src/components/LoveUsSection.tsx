import React from "react";
import "../styles/LoveUsSection.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const LoveUsSection: React.FC = () => {
  const cards = [
    {
      company: "Zoomerr",
      desc: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus. Viverra turpis lorem.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Hellen Jummy",
      role: "Team Lead",
    },
    {
      company: "Shells",
      desc: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis.",
      img: "https://randomuser.me/api/portraits/women/46.jpg",
      name: "Hellena John",
      role: "Co-founder",
    },
    {
      company: "ArtVenue",
      desc: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "David Oshodi",
      role: "Manager",
    },
    {
      company: "WaveLabs",
      desc: "Sed diam pretium fermentum, tempor malesuada lorem. Ante habitasse sed viverra dignissim.",
      img: "https://randomuser.me/api/portraits/women/90.jpg",
      name: "Sarah Miles",
      role: "Product Lead",
    },
    {
      company: "CrispyTech",
      desc: "Ullamcorper convallis egestas ipsum sed tortor ullamcorper morbi tincidunt. Amet sed aliquet.",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
      name: "Michael Dsouza",
      role: "Senior Analyst",
    },
  ];

  return (
    <div className="loveus-container">
    
      <div className="loveus-header">
        <h2 className="loveus-title">Because they love us</h2>

        <div className="loveus-icons">
          <button className="icon-btn">
            <WestIcon />
          </button>
          <button className="icon-btn">
            <EastIcon />
          </button>
        </div>
      </div>

      
      <div className="loveus-bg-strip"></div>

      <div className="loveus-card-slider">
        {cards.map((item, index) => (
          <div className="loveus-card" key={index}>
            <h3 className="card-title">{item.company}</h3>
            <p className="card-desc">{item.desc}</p>

            <div className="card-footer">
              <img src={item.img} alt="profile" className="user-img" />

              <div>
                <p className="user-name">{item.name}</p>
                <p className="user-role">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveUsSection;
