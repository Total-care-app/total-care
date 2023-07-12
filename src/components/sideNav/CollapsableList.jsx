import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Tooltip,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Collapse,
  Box,
} from "@mui/material";
import Link from "next/link";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const CollapsableList = ({
  open,
  openDrawer,
  icon,
  subList,
  tooltipText,
  title,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleListClickList = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box sx={{ mb: "18px" }}>
      <Tooltip title={!open ? tooltipText : ""} placement="right" arrow>
        <Link style={{ textDecoration: "none" }} href={"#"}>
          <ListItem
            disablePadding
            sx={{
              mt: open ? "-10px" : "10px",
              display: "flex",
              // bgcolor:"yellowgreen",
              height: "35px",
              pb: "10px",
              "&:hover": {
                background: "#5F9EA0",
              },
            }}
          >
            <ListItemButton
              onClick={openDrawer}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                "&:focus": {
                  border: "none !important",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "-51px !important",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  m: "10px 0px 0px 0px",
                  cursor: "pointer",
                }}
              >
                {icon}
              </ListItemIcon>

              <ListItemText
                onClick={() => {
                  handleListClickList(1);
                }}
                primary={title}
                sx={{
                  opacity: open ? 1 : 0,
                  color: "#FFFFFF",
                  display: "flex",
                  justifyContent: "left",
                  m: "10px 0px 0px 0px",
                  pl: "20px",
                  fontSize: "15px",
                  textTransform: "inherit",
                 
                }}
              />

              {open && (
                <IconButton
                  edge="end"
                  onClick={() => {
                    handleListClickList(1);
                  }}
                  sx={{ mt: "10px", color: "#FFF" }}
                >
                  {openIndex === 1 ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              )}
            </ListItemButton>
          </ListItem>

          {open && (
            <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
              {subList.map((item) => (
                <List
                  component="div"
                  disablePadding
                  sx={{ bgcolor: "#009193" }}
                >
                  <Link href={item.link}>
                    <ListItem button>
                      <Typography sx={{ color: "#EDEAE0", ml: "25px" }}>
                        {item.title}
                      </Typography>
                    </ListItem>
                  </Link>
                </List>
              ))}
            </Collapse>
          )}
        </Link>
      </Tooltip>
    </Box>
  );
};

export default CollapsableList;
