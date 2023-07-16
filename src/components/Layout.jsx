import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Badge,
  CssBaseline,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";

import { ExpandMore, ExpandLess } from "@mui/icons-material";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRouter } from "next/router";
import CollapsableList from "./sideNav/CollapsableList";
import DashboardMain from "./Home/DashboardMain";

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
  const userMgtSublist = [
    { title: "User List", link: "/usermgt/userlist" },
    { title: "Password Tracker", link: "/usermgt/passwordtracker" },
    { title: "Update User Table", link: "/usermgt/updateuserprofile" },
  ];
  const stockistmgtSubList = [
    { title: "Manage Stockist Product", link: "/stockistmgt/franchiseproductlist" },
    { title: "Stockist Requested Product", link: "/stockistmgt/stockist_requested_pdt" },
    { title: "Country Management", link: "/stockistmgt/country_mgt" },
  ];
  const stockist_fund_requestSublist = [
    { title: "Pending Fund Request", link: "/stockist_fund_request/pending_fund_request" },
    { title: "Approved Fund Request", link: "/stockist_fund_request/approved-fund-request" },
    { title: "Cancel Fund Request", link: "/stockist_fund_request/cancel-fund-request" },
  ];
  const stockist_wallet_managementSublist = [
    { title: "Manage Wallet", link: "/stockist-wallet-management/manage-wallet" },
   
  ];
  const e_pins_manageSublist = [
    { title: "Create E Pin", link: "/e-pins-manage/create-e-pin" },
    { title: "Fresh Pin Report", link: "/e-pins-manage/fresh-e-pin-report" },
    { title: "Used E Pin Report", link: "#" },
  ];
  const user_fund_request_managementSublist = [
    
  ];
  const reports_managementSublist = [
    { title: "Leadership Self Income", link: "#" },
    { title: "Leadership Income", link: "#" },
    { title: "Member Package Report", link: "#" },
  ];
  const rank_achieversSublist = [
    { title: "Rank Wise List", link: "#" },
   
  ];

  const e_wallet_mgtSublist = [
 
  ];
  const setting_mgtSublist = [
    { title: "Change Password", link: "#" },
    { title: "Change Profile Photo", link: "#" },
  
  ];
  const withdrawal_managementSublist = [
  
  ];
  const closing_managementSublist = [
    { title: "Leadership Monthly Closing", link: "#" },
  
  ];
  const query_ticket_managementSublist = [
    
  
  ];
  const order_managementSublist = [
    { title: "New Order List", link: "#" },
    { title: "Delivered Orders List", link: "#" },
  
  ];
  const product_managementSublist = [
 
  ];
  const admin_bank_managementSublist = [
 
  
  ];
  const policy_content_managementSublist = [
    { title: "Change Password", link: "#" },
    { title: "Change Profile Photo", link: "#" },
    { title: "Policy Content Update", link: "#" },
  ];

  return (
    <Box sx={{ display: "flex", margin: "2em 0.2em 0em 0.8em" }}>
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
              <Typography color="primary">VTC Admin</Typography>
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
                  <Box sx={{
                    width:'100px',
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent:'space-between'
              }}>
                    <Typography>Logout</Typography>
                    <LogoutIcon fontSize="14px"/>
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
             
            }}
          >
            {/* side nav */}

            <CollapsableList
            title="User Management"
              tooltipText={"User Management"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={userMgtSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Stockist Management"
              tooltipText={"Stockist Management"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={stockistmgtSubList}
              listIndex={1}
            />
            <CollapsableList
            title="Stockist Fund Request"
              tooltipText={"Stockist Fund Request"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={stockist_fund_requestSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Stockist Wallet"
              tooltipText={"Stockist Wallet"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={stockist_wallet_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="E pins"
              tooltipText={"E pins"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={e_pins_manageSublist}
              listIndex={1}
            />
            <CollapsableList
            title="User Fund Request"
              tooltipText={"User Fund Request"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={user_fund_request_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Reports Management"
              tooltipText={"Reports"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={reports_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Rank Achievers"
              tooltipText={"Rank Achievers"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={rank_achieversSublist}
              listIndex={1}
            />
            <CollapsableList
            title="E-wallet"
              tooltipText={"E-wallet"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={e_wallet_mgtSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Settings"
              tooltipText={"Settings"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={setting_mgtSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Withdrawals"
              tooltipText={"Withdrawals"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={withdrawal_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Closing Mgt"
              tooltipText={"Closing Mgt"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={closing_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Query Tickets"
              tooltipText={"WQuery Tickets"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={query_ticket_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Order Mgt"
              tooltipText={"Order Mgt"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={order_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Product Mgt"
              tooltipText={"Product Mgt"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={product_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Admin Bank Mgt"
              tooltipText={"Admin Bank Mgt"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={admin_bank_managementSublist}
              listIndex={1}
            />
            <CollapsableList
            title="Policy Content"
              tooltipText={"Policy Content"}
              open={open}
              openDrawer={handleDrawerOpen}
              icon={<AssignmentIcon />}
              subList={policy_content_managementSublist}
              listIndex={1}
            />
         

            {/* side nav */}
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
