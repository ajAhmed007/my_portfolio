import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, textAlign: "center", mt: "auto" }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Ahmed Abdullahi. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Built with{" "}
        <Link href="https://reactjs.org/" target="_blank">
          React
        </Link>{" "}
        and{" "}
        <Link href="https://mui.com/" target="_blank">
          Material-UI
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default Footer;
