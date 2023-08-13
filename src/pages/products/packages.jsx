"use client";
import Layout from "@/components/Layout";
import PackagesList from "@/components/Products/PackagesList";
import { Box } from "@mui/material";
import React from "react";

const packages = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          <PackagesList/>
        </Box>
      </Layout>
    </>
  );
};

export default packages;
