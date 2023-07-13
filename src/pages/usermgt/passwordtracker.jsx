import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import PasswordTracker from "@/components/user Mgt/PasswordTrackerTable";
import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const passwordtracker = () => {
  return (
 
 

      <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
         <DashboardMain/>
        <PasswordTracker />
          
        </Box>
      </Layout>
    </>
  );
};

export default passwordtracker;
