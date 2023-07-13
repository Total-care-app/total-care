import React from "react";
import Layout from "../Layout";
import { Box, Button, Typography } from "@mui/material";
import DashboardMain from "../Home/DashboardMain";
import { colorWheel } from "@/constants/colors";
import MainButton from "../customComponents/MainButton";
import UserListTable from "./userListTable";
import { CustomTextField } from "../customComponents/TextField";

const UserList = () => {
  return (
    <Box sx={{ p: "20px" }}>
      <Box sx={{ float: "right", mr: "30px" }}>
        <MainButton text="Export in Excell" />
      </Box>

      <UserListTable />

      
      {/* end */}
    </Box>
  );
};

export default UserList;