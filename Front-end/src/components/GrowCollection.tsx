import React from "react";
import { Box, Typography, Card, CardMedia, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import RunningShoe from "../assets/Running Shoes.jpg";
import Shoe2 from "../assets/shoe2.jpg";
import grow2 from "../assets/grow2.jpg";

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
        marginTop: "80px",
        padding: { xs: "40px 20px", md: "40px 60px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "40px",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "38px",
              fontWeight: 800,
              color: "#0a1733",
            }}
          >
            Grow Your Collection
          </Typography>

          <Typography
            sx={{
              marginTop: "10px",
              width: { xs: "100%", md: "60%" },
              color: "#555",
              fontSize: "16px",
              lineHeight: 1.5,
            }}
          >
            Discover unique sneakers and expand your style with carefully crafted footwear collections.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "14px",
              padding: "12px 16px",
              width: { xs: "100%", md: "45%" },
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
              marginTop: "30px",
              marginBottom: "40px",
              gap: "12px",
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
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                <Box
                  sx={{
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0a1733",
                    marginRight: "10px",
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

        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            position: "relative",
            height: "350px",
            marginRight:{ xs: "0", md: "40px" },
            marginTop: { xs: "40px", md: "0" },
          }}
        >
          <Card
            sx={{
              width: "80%",
              height: "400px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "absolute",
              boxShadow: "0px 12px 35px rgba(0, 0, 0, 0.25)",
              background: "white",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                padding: "8px 12px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                }}
              />
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                }}
              />
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#27c93f",
                }}
              />
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              image={RunningShoe}
              alt="Shoe 1"
            />
          </Card>

          <Card
            sx={{
              width: "80%",
              height: "400px",
              borderRadius: "18px",
              overflow: "hidden",
              marginRight:{ xs: "0", md: "40px" },
              position: "absolute",
              boxShadow: "0px 12px 35px rgba(0, 0, 0, 0.25)",
              background: "white",
              top: "60px",
              left: "40px",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                padding: "8px 12px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                }}
              />
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                }}
              />
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#27c93f",
                }}
              />
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              image={Shoe2}
              alt="Shoe 2"
            />
          </Card>

          <Card
            sx={{
              width: "30%",
              height: "250px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "absolute",
              boxShadow: "0px 12px 35px rgba(0, 0, 0, 0.25)",
              background: "white",
              top: "150px",
              left: "520px",
              zIndex: 3,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
