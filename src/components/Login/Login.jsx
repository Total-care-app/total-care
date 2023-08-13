"use client";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { CustomTextField } from "../customComponents/TextField";
import { useRouter } from "next/router";
import Image from "next/image";
import http from "@/config/http";
import { showToastMessage } from "../Products/ProductList";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });

  console.log("Form", loginField);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginField((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    await http
      .post("/login", loginField)
      .then((res) => {
        console.log("Login successfull", res);
        showToastMessage("Fetched data succesfully", "success");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "#000",
      }}
    >
      <ToastContainer/>
      <Box
        sx={{
          bgcolor: "#FFF",
          height: "30em",
          width: "40em",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "5%",
        }}
      >
        <Box>
          <Image src="/images/logo.jfif" width="80" height="80" />

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              textTransform: "uppercase",
              color: "brown",
              mb: "10px",
            }}
          >
            TOTAL CARE EUROPE UNIPESSOAL LDA
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <CustomTextField
            type="text"
            placeholder="User name"
            name="email"
            onChange={handleLoginChange}
            sx={{ mb: "25px" }}
          />
          <CustomTextField
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleLoginChange}
          />
        </Box>

        <Box>
          <Button
            type="submit"
            onClick={onSubmit}
            sx={{
              bgcolor: "#014d4e",
              textTransform: "Capitalize",
              width: "400px",
              fontWeight: "700",
              color: "#FFF",
              fontSize: "16px",
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "#5F9EA0",
              },
            }}
          >
            Login
          </Button>
          <Typography>
            Have No Account Yet?{" "}
            <span style={{ fontsize: "14px", color: "blue" }}>
              Register Here
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
