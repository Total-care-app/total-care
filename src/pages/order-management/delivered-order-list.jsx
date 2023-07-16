
import LeadershipMonthlyClosing from "@/components/ClosingManagement/LeadershipMonthlyClosing";
import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import DeliveredOrderList from "@/components/OrderManagement/DeliveredOrderList";
import MainButton from "@/components/customComponents/MainButton";
import CreateEpin from "@/components/ePinsManage/CreateEPin";
import ApprovedFundRequest from "@/components/stockist_fund_request_mgt/ApprovedFundRequest";
import PendingFundRequest from "@/components/stockist_fund_request_mgt/PendingFundRequest";
import CountryManagment from "@/components/stockistmgt/CountryMgt";
import FranchiseProductList from "@/components/stockistmgt/FranchiseProductList";
import StockistRequestedProduct from "@/components/stockistmgt/StockistRequstedProd";
import PasswordTracker from "@/components/user Mgt/PasswordTrackerTable";
import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const delivered_order_list = () => {
  return (
 
 

      <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
       
       <DeliveredOrderList/>
          
        </Box>
      </Layout>
    </>
  );
};

export default delivered_order_list;
