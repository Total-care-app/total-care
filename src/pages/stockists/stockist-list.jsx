'use client'
import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import StockistList from "@/components/Stockists/StockistList";
import UserListTable from "@/components/user Mgt/userListTable";
import { Box } from "@mui/material";
import React from "react";

const stockistlist = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          
          <StockistList />
        </Box>
      </Layout>
    </>
  );
};

export default stockistlist;
