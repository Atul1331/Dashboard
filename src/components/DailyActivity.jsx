import { Box, Typography, Stack, Button } from '@mui/material'
import styled from '@emotion/styled'
import earphone from '../assets/earphone.png'


const CustomButton = styled(Button)({
    padding: '6px 12px',
    backgroundColor: 'white',
    borderRadius: '20px',
    fontSize: 16,
    lineHeight: 1.5,
    width: '120px'
  })
  
  const data = [
    {
      key: 1,
      title : 'Listen',
      subtitle: '785 words',
      color: '#6eafe0',
      img: earphone
    },
    {
      key: 2,
      title : 'Listen',
      subtitle: '785 words',
      color: '#eb5eb2',
      img: earphone
    },
    {
      key: 3,
      title : 'Listen',
      subtitle: '785 words',
      color: '#875cdb',
      img: earphone
    }
  ]

  
  const DailyActivity = () => {
    return (
      <>
        <Typography variant='h5' sx={{fontWeight: 'bold', mb: 2}}>Your today's activity</Typography>
      <Stack direction={'row'} spacing={4} mb={8}>
        {data.map((item, index) => (
          <Box key={index} bgcolor={item.color} pl={2} pt={3} color={'white'} sx={{borderRadius: '20px'}}>
            <Stack direction={'row'} spacing={2}>
            <Box>
              <Typography sx={{fontSize:'30px', fontWeight:'500'}}>{item.title}</Typography>
              <Typography mb={10} sx={{fontSize:'20px', fontWeight:'400'}}>{item.subtitle}</Typography>
              <CustomButton sx={{color: item.color}}>Start</CustomButton>
            </Box>
            <img src={item.img} alt="" />
          </Stack>
          </Box>
        ))}
        {/* <Box bgcolor={'pink'}>
          <Stack direction={'row'}>
            <Box>
              <Typography>Listenin</Typography>
              <Typography>785 words</Typography>
              <CustomButton>Start</CustomButton>
            </Box>
            <img src={earphone} alt="" />
          </Stack>
        </Box>
        <Box>
          
        </Box>
        <Box>
          
        </Box> */}
      </Stack>
      </>
    )
  }
  
  export default DailyActivity
  