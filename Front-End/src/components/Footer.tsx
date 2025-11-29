import React from "react";
import "../styles/Footer.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <div className="footer-container">
     
      <div className="footer-top">
        <h1 className="footer-heading">Collect More Sneakers Today</h1>

        <button className="signup-btn">
          Sign up now 
        </button>
      </div>

      <hr className="footer-line" />

      
      <div className="footer-columns">
       
        <div className="footer-col">
          <h4>Product</h4>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
          <p>Five</p>
        </div>

        
        <div className="footer-col">
          <h4>Solutions</h4>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Research</p>
          <p>Design</p>
        </div>

        
        <div className="footer-col">
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>Developers</p>
          <p>Documentation</p>
          <p>Integrations</p>
          <p>Reports</p>
        </div>

        
        <div className="footer-col">
          <h4>Get the App</h4>

          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="store-btn"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="store-btn"
          />

          <h4 className="follow-title">Follow Us</h4>

          <div className="social-icons">
            <YouTubeIcon />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>

      <hr className="footer-line" />

     
      <div className="footer-bottom">
        <p>Collers © 2023. All rights reserved.</p>

        <div className="footer-links">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>

          <LanguageIcon className="globe-icon" />
          <span>EN</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
