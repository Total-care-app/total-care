"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Item } from "./userListTable";
import { CustomTextField } from "../customComponents/TextField";
import CustomButton from "../customComponents/CustomButton";
import http from "@/config/http";
import { useRouter } from "next/router";

const AddUser = () => {
const router = useRouter();


  const [formFields, setFormFields] = useState({
    firstName: "",
    otherNames: "",
    lastName: "",
    email: "",
    recoveryEmail: "",
    role: "",
    password: "",
    registrationStatus: "",
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
      .post("/v1/users", formFields)
      .then((res) => {
        console.log("User Reigstration successfull", res);
        router.push("/usermgt/userlist");
      })
      .catch((error) => {
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
      <Item style={{ padding: "20px" }}>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                mt: "20px",
                color: "#000",
              }}
            >
              Register a new user
            </Typography>
          </Grid>
          <Grid item xs={9}>
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
                    First Name
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="firstName"
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
                    Other Names
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="otherNames"
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
                    Last Name
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="lastName"
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
                    type="email"
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
                    Recovery Email
                  </Typography>
                  <CustomTextField
                    type="email"
                    name="recoveryEmail"
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
                    Role
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="role"
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
                    Password
                  </Typography>
                  <CustomTextField
                    type="password"
                    name="password"
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
                    Registration Status
                  </Typography>
                  <CustomTextField
                    type="text"
                    name="registrationStatus"
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
                  <CustomButton type="submit" onClick={onSubmit} title={"Submit"} />
                </Box>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
};

export default AddUser;
