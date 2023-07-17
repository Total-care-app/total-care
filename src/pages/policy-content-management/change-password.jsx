import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import PolicyChangePassword from "@/components/PolicyContentMgt/ChangePassword";
import { Box } from "@mui/material";
import React from "react";

const policy_change_password = () => {
  return (
    <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
          <DashboardMain />
          <PolicyChangePassword />
        </Box>
      </Layout>
    </>
  );
};

export default policy_change_password;
