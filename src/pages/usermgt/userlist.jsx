import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import UserListTable from "@/components/user Mgt/userListTable";
import { Box } from "@mui/material";
import React from "react";

const userlist = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          
          <UserListTable />
        </Box>
      </Layout>
    </>
  );
};

export default userlist;
