/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/material/Search";
import AdbIcon from "@mui/icons-material/Adb";

// Search Bar Style


const pages = ["Home", "Recipe", "Blog"];
const homeSubmenu = ["Products 1", "Products 2", "Products 3"];
const recipeSubmenu = ["Price 1", "Price 2", "Price 3"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElHome, setanchorElHome] = React.useState(null);
  const [anchorElPrice, setAnchorElPrice] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("null");

  const handleOpenNavMenu = (event, tab) => {
    setAnchorElNav(event.currentTarget);
    setActiveTab(tab);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenHomeMenu = (event) => {
    setanchorElHome(event.currentTarget);
  };
  const handleOpenRecipeMenu = (event) => {
    setAnchorElPrice(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseHomeMenu = () => {
    setanchorElHome(null);
  };
  const handleCloseRecipeMenu = () => {
    setAnchorElPrice(null);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleTabClick(page)}>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Desktop Menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              indicatorColor="secondary"
              textColor="secondary"
              onClick={
                page === "Home"
                  ? handleOpenHomeMenu
                  : page === "Recipe"
                  ? handleOpenRecipeMenu
                  : null
              }
              sx={{
                my: 2,
                color: activeTab === page ? "pink" : "black",
                display: "block",
                ":hover": {
                  color: "pink",
                  textDecoration: "underline",
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Submenu for Products */}
        <Menu
          id="products-menu"
          anchorEl={anchorElHome}
          open={Boolean(anchorElHome)}
          onClose={handleCloseHomeMenu}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {homeSubmenu.map((item) => (
            <MenuItem key={item} onClick={handleCloseHomeMenu}>
              <Typography>{item}</Typography>
            </MenuItem>
          ))}
        </Menu>
        {/* Recipe Submenu */}
        <Menu
          id="pricing-menu"
          anchorEl={anchorElPrice}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElPrice)}
          onClose={handleCloseRecipeMenu}
        >
          {recipeSubmenu.map((option) => (
            <MenuItem key={option} onClick={handleCloseRecipeMenu}>
              <Typography sx={{ textAlign: "center" }}>{option}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default NavBar;
