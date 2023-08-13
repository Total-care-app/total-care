"use client";
import Layout from "@/components/Layout";
import AddPackage from "@/components/Products/AddPackage";
import { Box } from "@mui/material";
import React from "react";

const addPackage = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          <AddPackage/>
        </Box>
      </Layout>
    </>
  );
};

export default addPackage;
