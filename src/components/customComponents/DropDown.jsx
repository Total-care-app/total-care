import React, {useState} from 'react'
import {Box, TextField, Input, MenuItem} from '@mui/material';

const dropDownItems = [
    {
        value: "1",
        Label: "Item 1",
    },
    {
        value: "2",
        Label: "Item 2",
    },
    {
        value: "3",
        Label: "Item 3",
    }
]

const DropDown = ({data, onChangeFunc, name, value, menuProp}) => {
  return (
    <TextField
    id='outlined-select-currency'
    size='small'
    select
    placeholder='Select cause'
    name={name}
    value={value}
    onChange={onChangeFunc}
    defaultValue={value}
    sx={{width:'100%',
textAlign:'left',

".MuiOutlinedInput-notchedOutline":{
    border:'1.5px solid gray',
    '&:hover':{
        border:"1px solid #000"
    },
    "& .MuiOutlinedInput-root":{
        fontSize:'12px',
        borderRadius:'8px',

        "& .Mui-focused fieldset":{
            border:"1px solid green"
        }
    },
    
}}}
    >

{data.map((option)=>(<MenuItem style={{fontSize:'12px', border:'none', backgroundColor:'#FFF'}}
key={option.value}
value={option.value}>
{option.Label}
</MenuItem>))}
    </TextField>
  )
}

export default DropDown;