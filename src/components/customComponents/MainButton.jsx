import { Button } from "@mui/material";
import React from "react";
import { colorWheel } from "@/constants/colors";

const MainButton = ({ text, float,width }) => {
  return (
    <Button
      sx={{
        bgcolor: colorWheel.primary,
        color: "#FFF",
        fontSize: "12px",
        p: "10px 25px",
        borderRadius: "20px",
        "&:hover": { bgcolor: colorWheel.secondary },
        width: width
      }}
    >
      {text}
    </Button>
  );
};

export default MainButton;
