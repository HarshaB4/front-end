import React from "react";
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
    <AppBar
      position="static"
      sx={{
        background: "#fffbeb",
        boxShadow: "none",
        padding: { xs: "8px 16px", md: "10px 40px" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: "26px",
            color: "#6b2f13",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          Collers
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "40px",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                color: "#6b2f13",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {page}
            </Button>
          ))}

          <Button
            sx={{
              color: "#6b2f13",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px",
              padding: "8px 22px",
              border: "2px solid #6b2f13",
              background: "transparent",
              color: "#6b2f13",
              boxShadow: "none",
              "&:hover": {
                background: "rgba(107, 47, 19, 0.04)",
                boxShadow: "none",
              },
            }}
          >
            Sign Up Now
          </Button>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            onClick={handleOpenMenu}
            sx={{
              color: "#6b2f13",
            }}
          >
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
