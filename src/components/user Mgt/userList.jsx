import React from "react";
import Layout from "../Layout";
import { Box, Button } from "@mui/material";
import DashboardMain from "../Home/DashboardMain";
import { colorWheel } from "@/constants/colors";
import MainButton from "../customComponents/MainButton";
import UserListTable from "./userListTable";

const UserList = () => {
  return (
    <Box sx={{p:'20px'}}>

      <Box sx={{ float: "right",m: "40px" }}>
        <MainButton text="Export in Excell" />
      </Box>

      <UserListTable />
    </Box>
  );
};

export default UserList;
