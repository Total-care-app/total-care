"use client";
import Layout from "@/components/Layout";
import AddProduct from "@/components/Products/AddProduct";
import AddProductPackage from "@/components/Products/AddProductPackage";
import ProductList from "@/components/Products/ProductList";
import AddStockist from "@/components/Stockists/AddStockist";
import { Box } from "@mui/material";
import React from "react";

const addProductPackage = () => {
  return (
    <>
      <Layout width="100%">
        <Box sx={{ ml: "-120px" }}>
          <AddProductPackage/>
        </Box>
      </Layout>
    </>
  );
};

export default addProductPackage;
