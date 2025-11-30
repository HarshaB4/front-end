import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0d1224",
        color: "white",
        padding: { xs: "30px", md: "60px 80px" },
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
          gap: { xs: "20px", md: "0" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", md: "45px" },
            fontWeight: 700,
          }}
        >
          Collect More Sneakers Today
        </Typography>

        <Button
          sx={{
            padding: "12px 24px",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            fontSize: "16px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textTransform: "none",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.1)",
              border: "2px solid white",
            },
          }}
        >
          Sign up now
        </Button>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.2)",
          margin: "35px 0",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "60px",
          paddingBottom: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "15px",
              fontWeight: 600,
            }}
          >
            Product
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Pricing
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Overview
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Browse
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Accessibility
          </Typography>
          <Typography
            sx={{
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Five
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "15px",
              fontWeight: 600,
            }}
          >
            Solutions
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Brainstorming
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Ideation
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Wireframing
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Research
          </Typography>
          <Typography
            sx={{
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Design
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "15px",
              fontWeight: 600,
            }}
          >
            Support
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Developers
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Documentation
          </Typography>
          <Typography
            sx={{
              marginBottom: "14px",
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Integrations
          </Typography>
          <Typography
            sx={{
              color: "#d9d9d9",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Reports
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "15px",
              fontWeight: 600,
            }}
          >
            Get the App
          </Typography>

          <Box
            component="img"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            sx={{
              width: "150px",
              margin: "10px 0",
              cursor: "pointer",
            }}
          />

          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            sx={{
              width: "150px",
              margin: "10px 0",
              cursor: "pointer",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginTop: "18px",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Follow Us
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "14px",
              fontSize: "26px",
              cursor: "pointer",
            }}
          >
            <YouTubeIcon sx={{ fontSize: "26px" }} />
            <FacebookIcon sx={{ fontSize: "26px" }} />
            <TwitterIcon sx={{ fontSize: "26px" }} />
            <InstagramIcon sx={{ fontSize: "26px" }} />
            <LinkedInIcon sx={{ fontSize: "26px" }} />
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.2)",
          margin: "35px 0",
        }}
      />

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          color: "#d9d9d9",
          fontSize: "14px",
          gap: { xs: "20px", md: "0" },
        }}
      >
        <Typography>Collers © 2023. All rights reserved.</Typography>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Terms
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Privacy
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Contact
          </Typography>

          <LanguageIcon sx={{ fontSize: "18px" }} />
          <Typography>EN</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
