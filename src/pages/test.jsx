import React, { useState } from "react";
import { List, ListItem, Typography, Collapse, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const ListComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleListClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <List component="nav">
      <ListItem button onClick={() => handleListClick(1)}>
        <Typography>Main List Item 1</Typography>
        <IconButton edge="end" onClick={() => handleListClick(1)}>
          {openIndex === 1 ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItem>
      <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <Typography>Sub List Item 1</Typography>
          </ListItem>
          <ListItem button>
            <Typography>Sub List Item 2</Typography>
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleListClick(2)}>
        <Typography>Main List Item 2</Typography>
        <IconButton edge="end" onClick={() => handleListClick(2)}>
          {openIndex === 2 ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItem>
      <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <Typography>Sub List Item 3</Typography>
          </ListItem>
          <ListItem button>
            <Typography>Sub List Item 4</Typography>
          </ListItem>
        </List>
      </Collapse>
      {/* Repeat the above structure for other list items */}
    </List>
  );
};

export default ListComponent;

