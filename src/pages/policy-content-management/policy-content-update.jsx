import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import PolicyContentUpdate from "@/components/PolicyContentMgt/PolicyContentUpdate";
import { Box } from "@mui/material";
import React from "react";

const policy_content_update = () => {
  return (
    <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
          <DashboardMain />
          <PolicyContentUpdate />
        </Box>
      </Layout>
    </>
  );
};

export default policy_content_update;
