'use client'
import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import ClientProfile from "@/components/MyProfile/ClientProfile";
import { Box } from "@mui/material";
import React from "react";

const clientProfile = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-100px" }}>
          
          <ClientProfile/>
        </Box>
      </Layout>
    </>
  );
};

export default clientProfile;
