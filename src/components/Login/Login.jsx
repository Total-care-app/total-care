import { Box, Button, TextField, Typography } from "@mui/material";
import { CustomTextField } from "../customComponents/TextField";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
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

        <Box sx={{width:'100%',}}>
          <CustomTextField type="text" placeholder="User name" sx={{mb:'25px'}} />
          <CustomTextField type="password" placeholder="Password" />
        </Box>

        <Box>
          <Button
            onClick={() => {
              router.push("/");
            }}
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
            Have No Account ?{" "}
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
