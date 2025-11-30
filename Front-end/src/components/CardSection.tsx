import React from "react";
import { Box, Typography, Button } from "@mui/material";
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
    <Box
      sx={{
        padding: "80px 0 20px 0",
        background: "#071634",
        position: "relative",
        overflow: "hidden",
        marginLeft: "50px"
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "250px",
          background: "#C2185B",
          borderRadius: "60px",
          position: "absolute",
          left: "130px",
          bottom: "20px",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: "130px",
          height: "130px",
          background: "#0A4AAC",
          borderRadius: "30px",
          position: "absolute",
          top: "170px",
          left: "41%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: "200px",
          height: "120px",
          background: "#ff9900bd",
          borderRadius: "30px",
          position: "absolute",
          top: "420px",
          left: "56.5%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />


      {/* Green – Right Middle */}
      <Box
        sx={{
          width: "180px",
          height: "200px",
          background: "#2E7D32",
          borderRadius: "60px",
          position: "absolute",
          right: "120px",
          top: "180px",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          width: "200px",
          height: "200px",
          background: "#8E24AA",
          borderRadius: "50px",
          position: "absolute",
          bottom: "8px",
          left: "78%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          padding: "0 70px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#fff",
            marginLeft: "80px"
          }}
        >
          The best of the best
        </Typography>

        <Button
          sx={{
            padding: "12px 28px",
            borderRadius: "12px",
            border: "2px solid #fff",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            textTransform: "none",
            background: "transparent",
            "&:hover": { background: "#fff", color: "#071634" },
          }}
        >
          Sign up now
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          padding: "0 40px",
          position: "relative",
          zIndex: 3,
          flexWrap: "wrap",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: "360px",
              background: "#0D1A36",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0px 8px 25px rgba(0,0,0,0.4)",
            }}
          >
            <Box
              component="img"
              src={card.img}
              sx={{ width: "100%", height: "220px", objectFit: "cover" }}
            />

            <Box sx={{ padding: "22px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#d0d0d0",
                  marginTop: "10px",
                  lineHeight: "1.5",
                }}
              >
                {card.subtitle}
              </Typography>

              <Button
                fullWidth
                sx={{
                  marginTop: "22px",
                  padding: "10px",
                  borderRadius: "12px",
                  border: "2px solid #fff",
                  background: "transparent",
                  color: "#fff",
                  display: "flex",
                  gap: "10px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textTransform: "none",
                  "&:hover": {
                    background: "#fff",
                    color: "#0D1A36",
                  },
                }}
              >
                <ShoppingCartOutlinedIcon />
                Buy Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardsSection;
