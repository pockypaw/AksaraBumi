"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container } from "@mui/system";
import Link from "next/link";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
            <ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
      <HomeIcon />
    </ListItemIcon>
    <ListItemText primary={"Home"} />
  </ListItemButton>
</ListItem>
<ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
      <FeaturedPlayListIcon />
    </ListItemIcon>
    <ListItemText primary={"How To"} />
  </ListItemButton>
</ListItem>
<ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
      <MiscellaneousServicesIcon />
    </ListItemIcon>
    <ListItemText primary={"Tutor AI"} />
  </ListItemButton>
</ListItem>
<ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
      <ContactsIcon />
    </ListItemIcon>
    <ListItemText primary={"Contact"} />
  </ListItemButton>
</ListItem>

     
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    color: "#000",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>

          <Title>Aksara Bumi</Title>
        </Box>

        <NavbarLinksBox>
          <Link href="#second-section" scroll={true}>
            <NavLink variant="body2">How To</NavLink>
          </Link>
          <Link href="#third-section" scroll={true}>
            {" "}
            <NavLink variant="body2">Tutor AI</NavLink>
          </Link>
          <Link href="#fourth-section" scroll={true}>
            {" "}
            <NavLink variant="body2">Contact</NavLink>
          </Link>
        </NavbarLinksBox>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
