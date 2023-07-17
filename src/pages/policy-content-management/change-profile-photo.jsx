import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import PolicyChangeProfilePhoto from "@/components/PolicyContentMgt/ChangeProfilePhoto";
import { Box } from "@mui/material";
import React from "react";

const policy_change_profile_photo = () => {
  return (
    <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
          <DashboardMain />
          <PolicyChangeProfilePhoto />
        </Box>
      </Layout>
    </>
  );
};

export default policy_change_profile_photo;
