import React from "react";
import { Box, Typography, Card } from "@mui/material";
import worldMap from "../assets/wordmap1111111-removebg-preview.png";
import shoes4 from "../assets/shoes4.jpg";

const ShoesCollected: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "600px",
        backgroundColor: "#7a3c09",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingBottom: "80px",
      }}
    >
      <Box
        component="img"
        src={worldMap}
        alt="world map"
        sx={{
          position: "absolute",
          width: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      <Card
        sx={{
          position: "absolute",
          top: { xs: "40px", md: "120px" },
          left: { xs: "20px", md: "180px" },
          width: { xs: "180px", md: "230px" },
          background: "white",
          borderRadius: "16px",
          padding: "0 0 15px 0",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 25px",
          zIndex: 3,
        }}
      >
        <Box
          component="img"
          src={shoes4}
          alt="shoe"
          sx={{
            width: "100%",
            height: "170px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            objectFit: "cover",
          }}
        />

        <Typography
          sx={{
            padding: "10px 12px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#3a3a3a",
          }}
        >
          Emma Simpson collected one pair of Cool Shoes.
        </Typography>
      </Card>

      <Box
        sx={{
          marginTop: "200px",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "42px", md: "62px" },
            fontWeight: 800,
            color: "white",
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          11,658,467
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "28px" },
            fontWeight: 600,
            color: "white",
            marginTop: "10px",
          }}
        >
          Shoes Collected
        </Typography>
      </Box>
    </Box>
  );
};

export default ShoesCollected;
