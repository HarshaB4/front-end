import React from "react";
import "../styles/Header.css";         
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Products", "Solutions", "Pricing", "Resources"];

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="header-appbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        
        <Typography className="header-logo">
          <h1>Collers</h1>
        </Typography>

        
        <Box sx={{ display: { xs: "none", md: "flex" } }} className="header-nav">
          {pages.map((page) => (
            <Button key={page} className="header-nav-btn">
              {page}
            </Button>
          ))}

          <Button className="header-login">Login</Button>

          <Button variant="contained" className="header-signup-btn">
            Sign Up Now
          </Button>
        </Box>

        
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpenMenu} className="header-menu-icon">
            <MenuIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseMenu}>
                {page}
              </MenuItem>
            ))}
            <MenuItem onClick={handleCloseMenu}>Login</MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Button variant="contained" fullWidth>
                Sign Up Now
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
