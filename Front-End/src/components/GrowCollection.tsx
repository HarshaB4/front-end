import React from "react";
import { Box, Typography, Card, CardMedia, Stack } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "../styles/GrowCollection.css";
import RunningShoe from "../assets/Running Shoes.jpg";
import Shoe2 from "../assets/shoe2.jpg";
import grow2 from "../assets/grow2.jpg"

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
}
const features: FeatureItem[] = [
  { icon: <ShieldOutlinedIcon sx={{ fontSize: 26 }} />, title: "Cras eget" },
  { icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 26 }} />, title: "Dolor pharetra" },
  { icon: <ComputerOutlinedIcon sx={{ fontSize: 26 }} />, title: "Amet, fringilla" },
  { icon: <PodcastsOutlinedIcon sx={{ fontSize: 26 }} />, title: "Amet nibh" },
  { icon: <TuneOutlinedIcon sx={{ fontSize: 26 }} />, title: "Sed velit" },
];

const GrowCollection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        px: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1300px", width: "100%", display: "flex", gap: 6 }}>
        
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Grow Your Collection
          </Typography>

          <Typography sx={{ color: "#555", mb: 4, width: "80%" }}>
            Discover unique sneakers and expand your style with carefully crafted footwear collections.
          </Typography>

        
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "14px",
              px: 2,
              py: 1.5,
              width: "45%",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              mb: 5,
              gap: 1.5,
            }}
          >
            <SearchIcon sx={{ color: "#555" }} />
            <Typography sx={{ flexGrow: 1, color: "#333", fontSize: "1.05rem" }}>
              Bibendum tellus
            </Typography>
            <ArrowForwardIcon sx={{ color: "#333" }} />
          </Box>
          <Stack spacing={3}>
            {features.map((f, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    p: 1.2,
                    borderRadius: "10px",
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {f.icon}
                </Box>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
                  {f.title}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        
        <Box sx={{ flex: 1, position: "relative", height: "420px" }}>

         
          <Card
            sx={{
              width: 700,
              position: "absolute",
              top: 10,
              right: 60,
              boxShadow: 4,
              borderRadius: 3,
              height: 450,
              padding: 2
            }}
          >
            <div className="browser-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <CardMedia
              component="img"
              height="450"
              width="1000"
              image={RunningShoe}
              alt="Shoe 1"
            />
          </Card>

          
          <Card
            sx={{
              width: 600,
              position: "absolute",
              top: 120,
              right: 60,
              boxShadow: 5,
              borderRadius: 3,
              height: 400,
              padding: 2
            }}
          >
            <div className="browser-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <CardMedia
              component="img"
              height="400"
              image={Shoe2}
              alt="Shoe 2"
            />
          </Card>

         
          <Card
            sx={{
              width: 200,
              position: "absolute",
              bottom: -30,
              right: -10,
              boxShadow: 5,
              borderRadius: 3,
              padding: 1
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={grow2}
              alt="Shoe 3"
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default GrowCollection;
