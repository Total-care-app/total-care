"use client";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Item } from "../user Mgt/userListTable";
import { CustomTextField } from "../customComponents/TextField";
import { EditOutlined } from "@mui/icons-material";
import CustomButton from "../customComponents/CustomButton";

import CustomDropdown from "../customComponents/DropddownInput";

export const CustomDivider = () => {
  return (
    <Box
      sx={{
        bgcolor: "gray",
        width: "100%",
        height: "1px",
        m: "20px 0px -10px 20px",
      }}
    ></Box>
  );
};

const currencies = [
  {
    value: "USD",
    label: "Dollar",
  },
  {
    value: "EUR",
    label: "Euro",
  },
  {
    value: "BTC",
    label: "Bitcoin",
  },
  {
    value: "JPY",
    label: "Japanese Yen",
  },
];

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const [gender, setGender] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "gender":
        setGender(value);
        break;
    }
  };

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
                <CustomDropdown
                  width="65%"
                  name="gender"
                  value={gender}
                  onChange={handleInputChange}
                  menuProp={
                    <MenuItem key="1" value="j">
                      one
                    </MenuItem>
                  }
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
                <CustomDropdown
                  width="65%"
                  name="country"
                  value="Uganda"
                  onChange={handleInputChange}
                  menuProp={
                    <MenuItem key="1" value="Uganda">
                      Uganda
                    </MenuItem>
                  }
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

          <CustomDivider />

          {/* bank details */}
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "left", fontSize: "18px", fontWeight: "600px" }}
            >
              Bank Details
            </Typography>
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
                Account Name :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  7483503089988748
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

          {/* bank name */}
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
                Bank Name. :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  ABC Bank
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

          {/* a/c name */}
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
                Acc. No. :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  74835454548748
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

          {/* Branch name */}
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
                Branch Name :
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

          {/* SWIFT Code */}
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
                SWIFT Code :
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

          {/* Blocked */}
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

          {/* address details */}

          <CustomDivider />

          {/* bank details */}
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "left", fontSize: "18px", fontWeight: "600px" }}
            >
              Address Details
            </Typography>
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
                Street Address 1 :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Kampala
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
                Street Address 1 :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Kampala
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

          {/* street 2 */}
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
                Street Address 2 :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Kampala
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
          {/* state */}
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
                State :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Uganda
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

          {/* zip */}
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
                ZIP Postal Code :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Kampala
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

          {/* city */}
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
                City :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Kampala
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
                  Uganda
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

          {/* Address type */}
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
                Address Type :
              </Typography>
              {!editMode ? (
                <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                  Uganda
                </Typography>
              ) : (
                <CustomDropdown
                  width="65%"
                  name="addressType"
                  value=""
                  onChange={handleInputChange}
                  menuProp={
                    <MenuItem key="1" value="j">
                      Address
                    </MenuItem>
                  }
                />
              )}
            </Box>
          </Grid>

          {editMode && (
            <Grid
              item
              xs={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
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
