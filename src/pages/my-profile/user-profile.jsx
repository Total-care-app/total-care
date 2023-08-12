'use client'

import Layout from "@/components/Layout";
import UserProfile from "@/components/MyProfile/UserProfile";


import { Box } from "@mui/material";
import React from "react";

const userProfile = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-100px" }}>
          
          <UserProfile/>
        </Box>
      </Layout>
    </>
  );
};

export default userProfile;
