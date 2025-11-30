import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
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
    <Box
      sx={{
        marginTop: "100px",
        padding: { xs: "40px 20px", md: "60px 40px" },
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#132043",
          }}
        >
          Because they love us
        </Typography>

        <Box
          sx={{
            display: "flex",
            marginRight: { xs: "0", md: "100px" },
            gap: "20px",
          }}
        >
          <IconButton
            sx={{
              cursor: "pointer",
              transition: "0.2s",
              borderRadius: "50%",
              padding: "6px",
              backgroundColor: "transparent",
              color: "hsl(19, 58%, 38%)",
              border: "solid 2px hwb(31 16% 40%)",
              "&:hover": {
                background: "#f1f1f1",
              },
            }}
          >
            <WestIcon />
          </IconButton>
          <IconButton
            sx={{
              cursor: "pointer",
              transition: "0.2s",
              borderRadius: "50%",
              padding: "6px",
              backgroundColor: "transparent",
              color: "hsl(19, 58%, 38%)",
              border: "solid 2px hwb(31 16% 40%)",
              "&:hover": {
                background: "#f1f1f1",
              },
            }}
          >
            <EastIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#ffe79b",
          height: "300px",
          width: "100%",
          borderRadius: "10px",
          marginTop: "30px",
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "20px",
          zIndex: 2,
          position: "relative",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {cards.map((item, index) => (
          <Box
            key={index}
            sx={{
              background: "white",
              minWidth: "320px",
              borderRadius: "14px",
              padding: "24px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              {item.company}
            </Typography>
            <Typography
              sx={{
                color: "#444",
                fontSize: "15px",
                marginBottom: "20px",
                lineHeight: 1.4,
              }}
            >
              {item.desc}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Avatar
                src={item.img}
                alt="profile"
                sx={{
                  width: "48px",
                  height: "48px",
                }}
              />

              <Box>
                <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  {item.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LoveUsSection;
