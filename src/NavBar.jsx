import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NavBar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Recipes</Button>
      <Button color="inherit">Features</Button>
      <Button color="inherit">Pages</Button>
      <Button color="inherit">Course</Button>
      <Button color="inherit">Shop</Button>
    </Box>
  );
};
