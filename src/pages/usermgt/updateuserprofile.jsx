import DashboardMain from '@/components/Home/DashboardMain'
import Layout from '@/components/Layout'
import UpdateUserprofile from '@/components/user Mgt/UpdateUserprofile'
import UserList from '@/components/user Mgt/userList'
import { Box } from '@mui/material'
import React from 'react'

const updateuserprofile = () => {
  return (
    <>
    <Layout>
      <Box sx={{ ml: "-133px", mr: "-26px", mt: "-53px" }}>
        <DashboardMain />
        <UpdateUserprofile/>
      </Box>
    </Layout>
  </>
  )
}

export default updateuserprofile