"use client";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Item } from "../user Mgt/userListTable";
import { CustomTextField } from "../customComponents/TextField";
import { EditLocationOutlined, EditOutlined } from "@mui/icons-material";
import CustomButton from "../customComponents/CustomButton";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Box>
      <Item>
        <Grid container spacing={4} padding={"20px"}>
          {/* image */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Avatar sx={{ height: "80px", width: "80px" }}>
              {/* inser image here */}
            </Avatar>
            <IconButton
              sx={{ width: "50px", height: "50px" }}
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              <EditOutlined />
            </IconButton>
          </Grid>
          {/* user id */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                User ID :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: "space",
                    position: "relative",
                  }}
                />
              )}
            </Box>
          </Grid>

          {/* gender */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                Gender :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: editMode ? "space-between" : "flex-start",
                    position: "relative",
                  }}
                />
              )}
            </Box>
          </Grid>

          {/* DOB */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                Date of Birth :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: editMode ? "space-between" : "flex-start",
                    position: "relative",
                  }}
                  type="date"
                />
              )}
            </Box>
          </Grid>

          {/* Phone */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                Phone Number :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: editMode ? "space-between" : "flex-start",
                    position: "relative",
                  }}
                />
              )}
            </Box>
          </Grid>

          {/* Country */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                Country :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: editMode ? "space-between" : "flex-start",
                    position: "relative",
                  }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                Blocked :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField sx={{ width: "65%", position: "relative" }} />
              )}
            </Box>
          </Grid>

          {/* status */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: editMode ? "space-between" : "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, mr: "20px" }}
              >
                Status :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  748358748
                </Typography>
              ) : (
                <CustomTextField
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: "space",
                    position: "relative",
                  }}
                />
              )}
            </Box>
          </Grid>
          {editMode && (
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ display: "flex",  justifyContent:'flex-end' }}
            >
              <CustomButton title={"Update Profile"} />
            </Grid>
          )}
        </Grid>
      </Item>
    </Box>
  );
};

export default UserProfile;
