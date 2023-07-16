
import DashboardMain from "@/components/Home/DashboardMain";
import Layout from "@/components/Layout";
import LeadershipSelfIncome from "@/components/ReportsManagement/LeadershipSelfIncome";
import MemberPackageReport from "@/components/ReportsManagement/MemberPAckageReport";
import MainButton from "@/components/customComponents/MainButton";
import ApprovedFundRequest from "@/components/stockist_fund_request_mgt/ApprovedFundRequest";
import PendingFundRequest from "@/components/stockist_fund_request_mgt/PendingFundRequest";
import CountryManagment from "@/components/stockistmgt/CountryMgt";
import FranchiseProductList from "@/components/stockistmgt/FranchiseProductList";
import StockistRequestedProduct from "@/components/stockistmgt/StockistRequstedProd";
import PasswordTracker from "@/components/user Mgt/PasswordTrackerTable";
import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const member_package_report = () => {
  return (
 
 

      <>
      <Layout>
        <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
        
       <MemberPackageReport/>
          
        </Box>
      </Layout>
    </>
  );
};

export default member_package_report;
