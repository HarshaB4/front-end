import React from "react";
import { Box, Button, Typography } from "@mui/material";
import sneakerImage from "../assets/product-jpeg-500x500-removebg-preview.png";
import backgroudImage from "../assets/lines-yellow-paper-backdrop_23-2147981599.jpg";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const MiddleContent: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "20px", md: "20px 40px" },
        maxHeight: "60vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "10px", md: "50px" },
            fontWeight: 500,
            color: "black",
            lineHeight: 1.1,
            marginBottom: "30px",
          }}
        >
          Collective Sneakers
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            color: "#444",
            margin: "10px",
          }}
        >
          Discover the latest sneaker collections crafted with premium comfort
          and style.
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            color: "#444",
            margin: "10px",
          }}
        >
          Step into the future of footwear with lightweight, durable designs.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              color: "#6b2f13",
              border: "solid 2px #6b2f13",
              padding: "10px 20px",
              borderRadius: "12px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                border: "solid 2px #6b2f13",
              },
            }}
          >
            Sign Up Now
          </Button>

          <Button
            variant="outlined"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              color: "#6b2f13",
              textTransform: "none",
              "&:hover": {
                border: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            Watch Demo
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "280px",
            height: "280px",
            backgroundImage: `url(${backgroudImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "25px",
            zIndex: 1,
          }}
        />

        <Box
          component="img"
          src={sneakerImage}
          alt="Sneakers"
          sx={{
            position: "relative",
            zIndex: 2,
            height: "720px",
            objectFit: "contain",
            marginBottom: "80px",
          }}
        />
      </Box>
    </Box>
  );
};

export default MiddleContent;
