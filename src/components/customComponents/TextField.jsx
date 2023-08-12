import {styled} from '@mui/material/styles'

export const CustomTextField = styled('input')(({theme})=>({
    border:'1.5px solid gray',
    justifyItems:'left',
    padding:'10px 15px',
    alignItems:'left',
    width:'100%',
    height:'35px',
    fontsize:'12px',
    boxSizing: 'border-box',
    borderRadius:'5px',
    outline:'none',
    '&:hover':{
      border:'1.8px solid #000'
    },
    '&:focus':{
      border:'1.5px solid #DCDCDC !important',
      outline:'none'
    }
  
  }))
  