import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";
import CollapsableList from "./sideNav/CollapsableList";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { GroupAdd, StorefrontOutlined } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";

const count = 76;
const CasesCount = 99;
// const no_of_lawFirms = 15;

const drawerWidth = 280; //#0A2240

export const CustomDivider = styled(Box)(({ theme }) => ({
  height: "0.1px",
  width: "300px",
  borderWidth: "0.5px 0px",
  borderStyle: "solid",
  border: "0.5px solid red",
  borderColor: "rgba(255, 255, 255, 0.4)",
  backgroundColor: "#FFFFFF",
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("xs")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Layout = ({ children }) => {
  const router = useRouter();
  let url = router.pathname;

  const [activeLink, setActiveLink] = React.useState(url);
  console.log(`url is ${activeLink}`);
  useEffect(() => {
    // Listen for changes to the URL and update the state variable
    const handleChange = () => {
      setActiveLink(url);
    };

    window.addEventListener("hashchange", handleChange);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("hashchange", handleChange);
  }, []);

  const theme = useTheme();
  // avatar menu

  const [anchorElAvata, setAnchorElAvata] = useState(null);
  const openAvata = Boolean(anchorElAvata);
  const handleClickAvata = (event) => {
    setAnchorElAvata(event.currentTarget);
  };
  const handleCloseAvata = () => {
    setAnchorElAvata(null);
  };

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // sub list items / links
  const dashboard = [];
  const userMgtSublist = [{ title: "Users", link: "/usermgt/userlist" }];

  const myProfile = [
    { title: "User Profile", link: "/my-profile/user-profile" },
    { title: "Client/Stockist Profile", link: "/my-profile/client-profile" },
  ];

  const stockists = [
    { title: "Stockist List", link: "/stockists/stockist-list" },
  ];
  const products = [
    { title: "Products", link: "/products/product-list" },
    { title: "Packages", link: "/products/packages" },
    { title: "Product-Packages", link: "/products/product-packages" },

];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Start Appbar */}
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: "#FFFFFF" }}>
          <IconButton
            color="#FFFFFF"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              "&:focus": {
                border: "none !important",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              borderRadius: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyItems: "center",
                //   p: "28px 32px 0px 39px",
              }}
            >
              <img
                src="../images/logo.jfif"
                alt="logo"
                height="53x"
                width="55px"
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#0A2240",
                  ml: "5px",
                }}
              >
                Total Care
              </Typography>
            </Box>

            {/* logout */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography color="primary">Admin</Typography>
              <IconButton
                aria-controls={openAvata ? "avata-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openAvata ? "true" : undefined}
                onClick={handleClickAvata}
                sx={{
                  "&:focus": {
                    border: "none !important",
                  },
                }}
              >
                <Avatar sx={{ bgcolor: "#014d4e" }}>CO</Avatar>
              </IconButton>
              <Menu
                id="avata-menu"
                anchorEl={anchorElAvata}
                open={openAvata}
                onClose={handleCloseAvata}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseAvata}>
                  <Box
                    sx={{
                      width: "100px",
                      display: "flex",
                      flexDirection: "row",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Logout</Typography>
                    <LogoutIcon fontSize="14px" />
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* End AppBar */}

      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* <TopNavBar/> */}
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            scrollbarWidth: "thin !important",
          }}
        >
          <DrawerHeader sx={{ bgcolor: "#014d4e" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon sx={{ color: "#FFF" }} />
              ) : (
                <ChevronLeftIcon sx={{ color: "#FFF" }} />
              )}
            </IconButton>
          </DrawerHeader>

          <List
            sx={{
              backgroundColor: "#014d4e",
              height: "100%",
            }}
          >
            {/* side nav */}

            <CollapsableList
              title="Dashboard"
              tooltipText={"Dashboard"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<HomeIcon />}
              listIndex={1}
              link="/"
              showMore={false}
            />
            <CollapsableList
              title="User Management"
              tooltipText={"User Management"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<GroupAdd />}
              subList={userMgtSublist}
              listIndex={1}
            />

            <CollapsableList
              title="My Profile"
              tooltipText={"User Management"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIndIcon />}
              subList={myProfile}
              listIndex={1}
            />
            <CollapsableList
              title="Stockist Management"
              tooltipText={"Stockists"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<StorefrontOutlined />}
              subList={stockists}
              listIndex={1}
            />
            <CollapsableList
              title="Product Management"
              tooltipText={"Products"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<StoreIcon />}
              subList={products}
              listIndex={1}
            />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
        </Box>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
