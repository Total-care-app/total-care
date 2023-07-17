import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";
import DashboardMain from "@/components/Home/DashboardMain";

export default function Home() {
  return (
    <>
      <Box>
        <Layout>
          <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
            <DashboardMain />
          </Box>
        </Layout>
      </Box>
    </>
  );
}
