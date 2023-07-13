import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import UserList from "@/components/user Mgt/userList";
import { Box } from "@mui/material";
import React from "react";

const userlist = () => {
  return (
    <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
          <DashboardMain />
          <UserList/>
        </Box>
      </Layout>
    </>
  );
};

export default userlist;
