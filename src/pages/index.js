import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Box>
        <Layout>
          <Box sx={{ m: "-50px -120px" }}>Home page</Box>
        </Layout>
      </Box>
    </>  
  );
}
