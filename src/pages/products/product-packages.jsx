"use client";
import Layout from "@/components/Layout";
import ProductList from "@/components/Products/ProductList";
import ProductPackageList from "@/components/Products/ProductPackageList";
import AddStockist from "@/components/Stockists/AddStockist";
import { Box } from "@mui/material";
import React from "react";

const productPackages = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          <ProductPackageList/>
        </Box>
      </Layout>
    </>
  );
};

export default productPackages;
