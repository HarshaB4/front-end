import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import RunningShoe from "../assets/Running Shoes.jpg";

const WhyJoinUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        background: "white",
        padding: "40px 40px",
        borderRadius: "20px",
        alignItems: "center",
        gap: "40px",
        boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.5)",
        margin: { xs: "60px 20px 20px 20px", md: "60px 20px 20px 20px" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginTop: { xs: "20px", md: "80px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "black",
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Why join us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "black",
              fontSize: "16px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <DoneIcon sx={{ color: "#4ade80", fontSize: "26px" }} />
            <Typography>Est et in pharetra magna adipiscing oranare aliquam</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "black",
              fontSize: "16px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <DoneIcon sx={{ color: "#4ade80", fontSize: "26px" }} />
            <Typography>Tell Us arcu sed consequat ac vellit ut eu blandit</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "black",
              fontSize: "16px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <DoneIcon sx={{ color: "#4ade80", fontSize: "26px" }} />
            <Typography>Ullamcorper ornare in et egestas dolor orci</Typography>
          </Box>
        </Box>

        <Button
          sx={{
            marginTop: "20px",
            padding: "12px 50px",
            backgroundColor: "white",
            color: "hsl(31, 58%, 38%)",
            border: "solid 2px hsl(31, 58%, 38%)",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              border: "solid 2px hsl(31, 58%, 38%)",
            },
          }}
        >
          Sign Up Now
        </Button>
      </Box>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "12px",
          marginRight: { xs: "0", md: "100px" },
          width: { xs: "100%", md: "fit-content" },
          background: "white",
          borderRadius: "16px",
          boxShadow: "0px 12px 30px rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#ff6b6b",
            }}
          />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#f0c419",
            }}
          />
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#06d6a0",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <Box
            component="img"
            src={RunningShoe}
            alt="why join us"
            sx={{
              width: { xs: "100%", md: "120%" },
              maxWidth: { xs: "100%", md: "400px" },
              height: "300px",
              borderRadius: "14px",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "110px",
              height: "110px",
              background: "rgba(0, 0, 0, 0.45)",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 0,
                height: 0,
                borderLeft: "32px solid white",
                borderTop: "20px solid transparent",
                borderBottom: "20px solid transparent",
                marginLeft: "6px",
              }}
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default WhyJoinUs;
