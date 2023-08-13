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

const AddStockist = () => {
  const router = useRouter();

  const [formFields, setFormFields] = useState({
    userId: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    blocked: "",
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
      .post("/v1/stockists", formFields)
      .then((res) => {
        console.log("User Reigstration successfull", res);
        showToastMessage("Fetched data succesfully", "success");
        setTimeout(() => {
          router.push("/stockists/stockist-list");
        }, 3000);
      })

      .catch((error) => {
        showToastMessage("Failed to create stockist", "error");
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
      <ToastContainer />
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
              Register a new stockist
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
                    User ID
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="userId"
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
                    Business Name
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="businessName"
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
                    Email
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="email"
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
                    Phone Number
                  </Typography>
                  <CustomTextField
                    type="number"
                    name="phoneNumber"
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
                    Blocked
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="blocked"
                    onChange={handleLoginChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    float: "right",
                    mt: "25px",
                    alignItems: "right",
                    alightContent: "right",
                    justifyContent: "flex-end",
                  }}
                >
                  <CustomButton
                    type="submit"
                    onClick={onSubmit}
                    title={"Submit"}
                  />
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
};

export default AddStockist;
