import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import AddUser from "@/components/user Mgt/AddUser";

import { Box } from "@mui/material";
import React from "react";

const userlist = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          
          <AddUser />
        </Box>
      </Layout>
    </>
  );
};

export default userlist;
