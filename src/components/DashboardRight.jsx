import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const DashboardRight = () => {
  return (
    <Box flex={1} py={4} px={2} sx={{height:'auto'}}>


      <Typography fontWeight={'600'} fontSize={'18px'} mb={'3px'}>Next Appointment</Typography>
      <Box bgcolor={'#ebf4f7'} p={2} sx={{borderRadius:'20px'}}>
        <Stack alignItems={'center'}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" sx={{width:'70px', height:'70px', marginBottom:'5px'}} />
          <Typography variant='p' fontWeight={'bold'} mb={3}>Dr. Rajesh Ranjan</Typography>
          <Button variant='contained' sx={{width:'150px', marginBottom:'8px'}}>Scheduled</Button>
          <Typography variant='p' sx={{fontSize:'16px', fontWeight:'500'}} >14th Feb, 2024</Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default DashboardRight
