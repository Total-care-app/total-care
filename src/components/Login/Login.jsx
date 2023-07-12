import { Box, Button, TextField, Typography } from "@mui/material";
import { CustomTextField } from "../customComponents/TextField";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "#548566",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFF",
          height: "20em",
          width: "25em",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          borderRadius: "5%",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#5F9EA0",
            mb: "10px",
          }}
        >
          Admin Panel
        </Typography>

        <CustomTextField type="text" placeholder="User name"/>
        <CustomTextField type="password" placeholder="Password"/>
        
        <Button
        onClick={()=>{router.push('/')}}
          sx={{
            bgcolor: "#014d4e",
            textTransform:'Capitalize',
            fontWeight:'700',
            color: "#FFF",
            fontSize: "16px",
            borderRadius: "20px",
            '&:hover':{
                bgcolor:'#5F9EA0'
            }
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
