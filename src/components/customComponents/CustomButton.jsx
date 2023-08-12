'use client'
import { Button } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import React from 'react'

const CustomButton = ({type, title, onClick}) => {
  return (
    <Button
    type={type}
              onClick={onClick}
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "#FFFFFF",
                background: "#43b3ae",
                ml: "10px",
                height: "35px",
                textTransform: "capitalize",
               p:'0px 40px',
                "&:hover": {
                  background:
                    "#5f9ea0",
                  transition: "0.5s ease-in",
                },
                "&:focus": {
                  border: "none !important",
                },
              }}
           
            >
              {title}
            </Button>
  )
}

export default CustomButton