import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/CompaniesSection.css";


import logo1 from "../assets/nibha logo.jpg";
import logo2 from "../assets/curus logo.jpg";
import logo3 from "../assets/Ipsumlogo.jpg";

const CompaniesSection: React.FC = () => {
  return (

      <Box className="companies-logos">
        <Box className="company">
            <img src={logo1} alt="Company 1" className="company-logo" />
            <h6>Nibha viverra</h6>
            <p>Sit bibendum donec dolor fames neque vulpulate non sit
             aliquam.Consequant turpis natoque leo,massa</p>
        </Box>
        <Box className="company">
            <img src={logo2} alt="Company 2" className="company-logo" />
            <h6>Cursus amet</h6>
            <p>Sit bibendum donec dolor fames neque vulputate non sit
                aliquam.Consequant trupis natoque leo,massa</p>
        </Box>
        <Box className="company">
            <img src={logo3} alt="Company 3" className="company-logo" />
            <h6>Ipsum dolor</h6>
            <p>Sit bibendum donec dolor fames neque vulputate non sit
                aliquam.Consequant turpis natoque leo,massa</p>
        </Box>
      </Box>
  );
};

export default CompaniesSection;
