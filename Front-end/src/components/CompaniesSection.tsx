import React from "react";
import { Box, Typography } from "@mui/material";
import logo1 from "../assets/nibha logo.jpg";
import logo2 from "../assets/curus logo.jpg";
import logo3 from "../assets/Ipsumlogo.jpg";

const CompaniesSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "600px" },
          margin: { xs: "10px 0", md: "0 20px" },
          marginTop: "3px",
          marginBottom: "50px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          component="img"
          src={logo1}
          alt="Company 1"
          sx={{
            width: "120px",
            height: "auto",
            objectFit: "contain",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Typography variant="h6">Nibha viverra</Typography>
        <Typography>
          Sit bibendum donec dolor fames neque vulpulate non sit
          aliquam.Consequant turpis natoque leo,massa
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "600px" },
          margin: { xs: "10px 0", md: "0 20px" },
          marginTop: "3px",
          marginBottom: "50px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          component="img"
          src={logo2}
          alt="Company 2"
          sx={{
            width: "120px",
            height: "auto",
            objectFit: "contain",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Typography variant="h6">Cursus amet</Typography>
        <Typography>
          Sit bibendum donec dolor fames neque vulputate non sit
          aliquam.Consequant trupis natoque leo,massa
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "600px" },
          margin: { xs: "10px 0", md: "0 20px" },
          marginTop: "3px",
          marginBottom: "50px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          component="img"
          src={logo3}
          alt="Company 3"
          sx={{
            width: "120px",
            height: "auto",
            objectFit: "contain",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Typography variant="h6">Ipsum dolor</Typography>
        <Typography>
          Sit bibendum donec dolor fames neque vulputate non sit
          aliquam.Consequant turpis natoque leo,massa
        </Typography>
      </Box>
    </Box>
  );
};

export default CompaniesSection;
