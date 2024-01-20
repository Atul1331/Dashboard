import React from 'react'
import { Box, Stack } from '@mui/material'
import DashboardLeft from './DashboardLeft'
import DashboardRight from './DashboardRight'

const Dashboard = () => {
    return (
      <Box flex={8} >
        <Stack direction="row"  justifyContent={"space-between"} >
          <DashboardLeft />
          <DashboardRight />
        </Stack>
      </Box>
    )
  }
  
  export default Dashboard