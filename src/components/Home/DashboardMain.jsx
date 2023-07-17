import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardMain = () => {
  return (
    <Box sx={{ width: "100%", height: "20%", bgcolor:'#014d4e',color:'#fff', p: "20px" }}>
      <Typography fontSize="16px">Dashboard</Typography>
      <Typography fontSize="12px">
        Welcome VITC_ADMIN into TOTAL CARE EUROPE UNIPESSOAL LDA Admin dashboard..
      </Typography>
    </Box>
  );
};

export default DashboardMain;
