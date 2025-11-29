import React from "react";
import "../styles/WhyJoinUs.css";
import DoneIcon from '@mui/icons-material/Done';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RunningShoe from "../assets/Running Shoes.jpg"
import Card from '@mui/material/Card';
import { Button } from "@mui/material";

const WhyJoinUs = () => {
  return (
    <div className="joinus-card">
    
      <div className="joinus-left">
        <h2 className="joinus-title">Why join us</h2>

        <div className="joinus-points">
          <div className="point">
            <DoneIcon className="tick-icon" />
            <span>Est et in pharetra magna adipiscing oranare aliquam</span>
          </div>

          <div className="point">
            <DoneIcon className="tick-icon" />
            <span>Tell Us arcu sed consequat ac vellit ut eu blandit</span>
          </div>

          <div className="point">
            <DoneIcon className="tick-icon" />
            <span>Ullamcorper ornare in et egestas dolor orci</span>
          </div>
        </div>
        <Button className="joinus-signup-button">
          Sign Up Now
        </Button>
      </div>

      
      <Card className="joinus-right">
        <div className="browser-bar">
    <span className="dot red"></span>
    <span className="dot yellow"></span>
    <span className="dot green"></span>
  </div>
        <div className="joinus-image-wrapper">
          <img
            src={RunningShoe}
            alt="why join us"
            className="joinus-image"
          />

      <div className="play-overlay">
      <span className="triangle"></span>
    </div>
        </div>
      </Card>
    </div>
  );
};

export default WhyJoinUs;
