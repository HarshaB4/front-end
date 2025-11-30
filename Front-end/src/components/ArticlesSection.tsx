import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Article1 from "../assets/article1.jpg";
import Article2 from "../assets/article2.jpg";
import Article3 from "../assets/article3.jpg";
import Article4 from "../assets/article4.jpg";

const ArticlesSection = () => {
  const articles = [
    {
      img: Article1,
      title: "Congue velit risus",
      text: "Nunc gravida semper tellus neque scelerisque eget tincidunt in.",
    },
    {
      img: Article2,
      title: "Ut mauris",
      text: "Phasellus venenatis massa bibendum posuere dictum tristique.",
    },
    {
      img: Article3,
      title: "Aliquam tortor nunc",
      text: "Leo mollis fermentum praesent in condimentum id velit purus in.",
    },
    {
      img: Article4,
      title: "Fusce non morbi",
      text: "In sed bibendum metus pretium cursus tellus pharetra.",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "40px 20px", md: "40px 60px" },
        background: "#fffdf8",
        width: "100%",
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
          variant="h2"
          sx={{
            fontSize: { xs: "28px", md: "38px" },
            fontWeight: 800,
            color: "#0e1a2b",
          }}
        >
          Articles by Collectors
        </Typography>

        <Box
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            marginRight: { xs: "0", md: "70px" },
            color: "#8b4a1e",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>More Articles</Typography>
          <ArrowForwardIcon sx={{ marginLeft: "5px", fontSize: "20px" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "28px",
          marginRight: { xs: "0", md: "100px" },
        }}
      >
        {articles.map((item, index) => (
          <Box
            key={index}
            sx={{
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.1)",
              transition: "0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 22px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
              }}
            />

            <Box sx={{ padding: "18px 20px 25px" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "#0e1a2b",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#4a4a4a",
                  marginBottom: "18px",
                }}
              >
                {item.text}
              </Typography>

              <Box
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#8b4a1e",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Read article</Typography>
                <ArrowForwardIcon sx={{ marginLeft: "5px", fontSize: "20px" }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ArticlesSection;
