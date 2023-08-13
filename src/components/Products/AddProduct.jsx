"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Item } from "../user Mgt/userListTable";
import { CustomTextField } from "../customComponents/TextField";
import CustomButton from "../customComponents/CustomButton";
import http from "@/config/http";
import { useRouter } from "next/router";
import { showToastMessage } from "../Products/ProductList";
import { ToastContainer } from "react-toastify";

const AddProduct = () => {
  const router = useRouter();

  const [formFields, setFormFields] = useState({
    name: "",
    price: "",
    salesVolume: "",
    codename: "",
    barcode: "",
  });

  console.log("Form", formFields);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    await http
      .post("/v1/products", formFields)
      .then((res) => {
        console.log("User Reigstration successfull", res);
        showToastMessage("Fetched data succesfully", "success")
        setTimeout(() => {
            router.push("/stockists/stockist-list")
        }, 3000)

      })

      .catch((error) => {
        showToastMessage("Failed to create stockist", "error")
        console.log("userReg error", error);
      });
  };
  return (
    <Grid
      item
      xs={6}
      md={3}
      sx={{
        ml: `${20}px`,
        mr: "0px",
        mt: "50px",
      }}
    >
      <ToastContainer/>
      <Item style={{ padding: "20px" }}>
        <Grid container>
          <Grid item xs={12} lg={3}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                mt: "20px",
                color: "#000",
                textAlign: "center",
              }}
            >
              
              Add new product
            </Typography>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Item style={{ padding: "20px" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "200",
                      color: "#000",
                      textAlign: "left",
                      mb: "5px",
                    }}
                  >
                  Product Name
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="name"
                    onChange={handleLoginChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "200",
                      color: "#000",
                      textAlign: "left",
                      mb: "5px",
                    }}
                  >
                  Price
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="price"
                    onChange={handleLoginChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "200",
                      color: "#000",
                      textAlign: "left",
                      mb: "5px",
                    }}
                  >
                    Sales Volume
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="salesVolume"
                    onChange={handleLoginChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "200",
                      color: "#000",
                      textAlign: "left",
                      mb: "5px",
                    }}
                  >
                    Code Name
                  </Typography>
                  <CustomTextField
                    type="number"
                    name="codename"
                    onChange={handleLoginChange}
                  />
                </Grid>
                

                <Grid item xs={12} lg={6}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "200",
                      color: "#000",
                      textAlign: "left",
                      mb: "5px",
                    }}
                  >
                   Bar Code
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="barcode"
                    onChange={handleLoginChange}
                  />
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    width: "200px",
                    float: "right",
                    m: "15px",
                  }}
                >
                  <CustomButton
                    type="submit"
                    onClick={onSubmit}
                    title={"Submit"}
                  />
                </Box>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
};

export default AddProduct;
