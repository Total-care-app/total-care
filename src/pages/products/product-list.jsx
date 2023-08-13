"use client";
import Layout from "@/components/Layout";
import ProductList from "@/components/Products/ProductList";
import AddStockist from "@/components/Stockists/AddStockist";
import { Box } from "@mui/material";
import React from "react";

const addStockist = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          <ProductList />
        </Box>
      </Layout>
    </>
  );
};

export default addStockist;
