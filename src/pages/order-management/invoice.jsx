
import Inovice from "@/components/Invoice/Inovice";
import Layout from "@/components/Layout";
import NewOrderList from "@/components/OrderManagement/NewOrderList";
import { Box } from "@mui/material";
import React from "react";

const new_order_list = () => {
  return (
 
 

      <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
       
       <Inovice/>
          
        </Box>
      </Layout>
    </>
  );
};

export default new_order_list;
