import React, {useState} from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, ListItem } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GamesIcon from '@mui/icons-material/Casino';
import styled from '@emotion/styled';


const ListItemStyled = styled(ListItem)({
  color: 'black',
  '&:hover': {
    color: 'black',
    backgroundColor: '#c3e3f7',
    borderRadius: '10px'
  },
  '& .Mui-selected': {
    backgroundColor: '#2e7cdb',
    color: 'white',
    borderRadius: '10px'
  },
})

const Sidebar = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box flex={1} pt={4} px={2}>
      <Typography fontSize={'20px'} color={'red'} mb={3}>App Logo</Typography>

      <List component="nav" aria-label="main mailbox folders">
        <ListItemStyled disablePadding sx={{mb:'10px'}}>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardIcon sx={{color: 'black'}}/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        </ListItemStyled>

        <ListItemStyled disablePadding>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <GamesIcon sx={{color: 'black'}}/>
          </ListItemIcon>
          <ListItemText primary="Games"  />
        </ListItemButton>
        </ListItemStyled>
      </List>
      <Divider />
    
    </Box>
  )
}

export default Sidebar
