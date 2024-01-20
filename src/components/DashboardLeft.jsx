import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import child from '../assets/child.png'
import DailyActivity from './DailyActivity'


const DashboardLeft = () => {
  return (
    <Box bgcolor={'#ebf4f7'} flex={3} p={4}>
      <Typography variant='h5' mb={2} pl={2}>Hi! Atul, Welcome 👋🏼</Typography>

      {/* Section 1 */}
      <Box bgcolor={'#f58433'} px={10} mb={8} sx={{borderRadius: '20px'}}>
        <Stack direction={"row"} alignItems={'center'} spacing={15}>
          <img src={child} alt="Child" width='300px' />
          <Stack>
            <Typography variant='h3' mb={1} sx={{textTransform: 'uppercase', maxWidth:'500px'}}>This is your day 1 of something.</Typography>
            <Typography variant='h5' color={'grey'}>Go and Explore</Typography>
          </Stack>
        </Stack>
      </Box>


      {/* Section 2 */}
      <DailyActivity />


      {/* Section 2 */}
      <Typography variant='h5' sx={{fontWeight: 'bold', mb: 2}}>Your today's plan</Typography>

    </Box>
  )
}

export default DashboardLeft
