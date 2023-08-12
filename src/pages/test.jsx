// import React, { useState } from "react";
// import { List, ListItem, Typography, Collapse, IconButton } from "@mui/material";
// import { ExpandMore, ExpandLess } from "@mui/icons-material";

// const ListComponent = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleListClick = (index) => {
//     setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <List component="nav">
//       <ListItem button onClick={() => handleListClick(1)}>
//         <Typography>Main List Item 1</Typography>
//         <IconButton edge="end" onClick={() => handleListClick(1)}>
//           {openIndex === 1 ? <ExpandLess /> : <ExpandMore />}
//         </IconButton>
//       </ListItem>
//       <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItem button>
//             <Typography>Sub List Item 1</Typography>
//           </ListItem>
//           <ListItem button>
//             <Typography>Sub List Item 2</Typography>
//           </ListItem>
//         </List>
//       </Collapse>

//       <ListItem button onClick={() => handleListClick(2)}>
//         <Typography>Main List Item 2</Typography>
//         <IconButton edge="end" onClick={() => handleListClick(2)}>
//           {openIndex === 2 ? <ExpandLess /> : <ExpandMore />}
//         </IconButton>
//       </ListItem>
//       <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItem button>
//             <Typography>Sub List Item 3</Typography>
//           </ListItem>
//           <ListItem button>
//             <Typography>Sub List Item 4</Typography>
//           </ListItem>
//         </List>
//       </Collapse>
//       {/* Repeat the above structure for other list items */}
//     </List>
//   );
// };

// export default ListComponent;

import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "US Dollar",
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

export default function CustomDropdown() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      id="custom-dropdown"
      select
      value={currency}
      onChange={handleChange}
      variant="outlined"
      sx={{
        
        width:'100%',
        "& .MuiOutlinedInput-root": {
          borderRadius: "1.5px",
          height:'35px',
          borderRadius:'5px',
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AAB5C0",
            " &:focus-within": {
              borderColor: "#0A2240",
              borderRadius: "1px",
            },
          },
        },
      }}
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
