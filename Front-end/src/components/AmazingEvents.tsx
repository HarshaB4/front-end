import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AmazingEvent1 from "../assets/AmazingEvent1.jpg";
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
    <Box
      sx={{
        padding: { xs: "20px", sm: "50px 80px" },
        backgroundColor: "#fef3d4",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "35px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "42px",
            fontWeight: 700,
          }}
        >
          Amazing events
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontWeight: 600,
            cursor: "pointer",
            color: "#a0522d",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>Explore Articles</Typography>
          <ArrowForwardIcon sx={{ fontSize: "22px" }} />
        </Box>
      </Box>
      <Grid
        container
        spacing={3.75}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {events.map((event) => (
          <Box
            key={event.title}
            sx={{
              background: "white",
              padding: "18px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 25px",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "gray",
                marginBottom: "3px",
              }}
            >
              {event.category}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                margin: "4px 0 14px 0",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {event.title}
            </Typography>

            <Box
              component="img"
              src={event.image}
              alt={event.title}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "14px",
                marginBottom: "16px",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontWeight: 600, color: "#a0522d" }}>
                Buy Tickets
              </Typography>
              <ArrowForwardIcon sx={{ color: "#a0522d" }} />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default AmazingEvents;
