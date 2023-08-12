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

export default function CustomDropdown({value, name, onChange, menuProp, width}) {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField
      id="custom-dropdown"
      select
      value={value}
      name={name}
      onChange={onChange}
      variant="outlined"
      sx={{
        width:width,
        "& .MuiOutlinedInput-root": {
          borderRadius: "1px",
          textAlign: "left",
          height: "35px",
          borderRadius: "5px",

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
     {menuProp}
    
    </TextField>
  );
}
