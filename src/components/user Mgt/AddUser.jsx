"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Item } from "./userListTable";
import { CustomTextField } from "../customComponents/TextField";

const AddUser = () => {
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
      <Item style={{padding:'20px'}}>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "700", color: "#000" }}
            >
              Add A New User
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Item style={{padding:'20px'}}>
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
                  <CustomTextField />
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
                  <CustomTextField />
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
                  <CustomTextField />
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
                  <CustomTextField />
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
                  <CustomTextField />
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
                  <CustomTextField />
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
                  <CustomTextField />
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
                  <CustomTextField />
                </Grid>
                
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
};

export default AddUser;
