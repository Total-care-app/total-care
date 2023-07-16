import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import DropDown from '../customComponents/DropDown'
import { CustomTextField } from '../customComponents/TextField'
import MainButton from '../customComponents/MainButton'

let data = [
    {
        value: "Bronze: $180",
        Label: "Bronze: $180",
    },
    {
        value: "Silver: $150",
        Label: "Silver: $150",
    },
    {
        value: "Gold: $750",
        Label: "Gold: $750",
    },
    {
        value: "Platinum: $1125",
        Label: "Platinum: $1125",
    },
    {
        value: "Diamond: $1800",
        Label: "Diamond: $1800",
    }
]


const ChangePassword = () => {
  return (
    <Box elevation={8} sx={{bgcolor:'#FFF', width:'70vw', height:'500px',  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius:'10px', 
    mt:'20px',
     ml:'45px',
     p:'10px'
     
    //  mr:'-100px'
}}>
     <Typography sx={{ fontSize: "20px", fontWeight: 700, m: "20px" }}>
         Change Login Password
          </Typography>
          <Divider/>

          <Box sx={{m:'20px'}}>
            <Typography sx={{fontWeight:600, fontSize:'14px', mb:'10px'}}>Enter New Password</Typography>
           <CustomTextField placeholder='Enter New Passowrd' type='password'/>
          </Box>
        
          <Box sx={{m:'20px'}}>
            <Typography sx={{fontWeight:600, fontSize:'14px', mb:'10px'}}>Retype New Password</Typography>
           <CustomTextField sx={{mb:'20px'}} placeholder='Retype New PAssword' type='password'/>

           <MainButton width="150px" text="Submit"/>
          </Box>

       

    </Box>
  )
}

export default ChangePassword