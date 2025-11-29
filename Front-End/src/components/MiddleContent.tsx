import React from "react";
import "../styles/MiddleContent.css";
import { Box, Button, Typography } from "@mui/material";
import sneakerImage from "../assets/product-jpeg-500x500-removebg-preview.png";
import backgroudImage from "../assets/lines-yellow-paper-backdrop_23-2147981599.jpg";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const MiddleContent: React.FC = () => {
  return (
    <Box className="hero-container">

     
      <Box className="hero-left">
        <Typography variant="h2" className="hero-title">
          Collective Sneakers
        </Typography>

        <Typography className="hero-subtext">
          Discover the latest sneaker collections crafted with premium comfort
          and style.
        </Typography>

        <Typography className="hero-subtext">
          Step into the future of footwear with lightweight, durable designs.
        </Typography>
        <Box className="hero-buttons">
          <Button className="signup-btn-1">
            Sign Up Now
          </Button>

          <Button variant="outlined" className="btn-demo" startIcon={<PlayCircleOutlineIcon />}>
            Watch Demo
          </Button>
        </Box>
      </Box>

      
      <Box className="hero-right">

       
        <Box
          className="bg-shape"
          sx={{ backgroundImage: `url(${backgroudImage})` }}
        />

        
        <img
          src={sneakerImage}
          alt="Sneakers"
          className="hero-image"
        />

      </Box>


    </Box>
  );
};

export default MiddleContent;
