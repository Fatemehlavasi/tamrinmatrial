import React from 'react'
import Grid from "@mui/material/Grid";
import ListOption from "../Components/ListOption"
import profile from '../Image/profile.png'
import clock from "../Image/clock.png"
import AddCircleIcon from '@mui/icons-material/AddCircle'
// import {Button, Typography} from "@mui/material";
import { Typography,TextField,Box, ListItem,Icon } from '@mui/material';
function welcome() {
  return (
    
    <>
    <Box height={300} width={'100%'} bgcolor={'primary.main'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} sx={{flexDirection:'column'}}>
        <Box width={'fit-content'}><img src={profile} /></Box>
        <Box ><Typography variant={'h3'} color={'#000'}>Welcome Oliva Grace</Typography> </Box>
    </Box>
    <Grid display={'flex'} sx={{flexDirection:"column",alignItems:'center'}} xs={12}  p={3}>
        <Grid alignSelf={'flex-end'} ><Typography variant={'h2'} color={'#000'}>Good Afternoon</Typography></Grid>
        <Grid ><img src={clock} /></Grid>
        <Grid alignSelf={'flex-start'}><Typography variant={'h2'} color={'#000'}>Task Lists</Typography></Grid>
        <Grid width={'100%'} bgcolor={'#fff'} height={300} p={1} marginTop={1} borderRadius={5}>
            <Grid display={'flex'} justifyContent={'space-between'}  sx={{px:2,marginBottom:1}}>               <Typography variant={'h3'}>Daily Tasks</Typography>
            <AddCircleIcon color='primary'sx={{cursor:'pointer'}}/>
            </Grid>
            <ListOption/>
            </Grid>
    </Grid>
    </>
  )
}

export default welcome