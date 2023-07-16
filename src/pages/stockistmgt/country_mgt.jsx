
import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import MainButton from "@/components/customComponents/MainButton";
import CountryManagment from "@/components/stockistmgt/CountryMgt";
import FranchiseProductList from "@/components/stockistmgt/FranchiseProductList";
import StockistRequestedProduct from "@/components/stockistmgt/StockistRequstedProd";
import PasswordTracker from "@/components/user Mgt/PasswordTrackerTable";
import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const country_mgt = () => {
  return (
 
 

      <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
         <Box sx={{float:'right', mr:'40px', mb:'20px'}}><MainButton text="Add New Country"/></Box>
       <CountryManagment/>
          
        </Box>
      </Layout>
    </>
  );
};

export default country_mgt;
