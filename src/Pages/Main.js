import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Mainpic from '../Image/Mainpic.png'
import { Link } from "react-router-dom";
const Main = () => {
    return ( 
        <Grid container sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',minHeight:"600px"}} marginTop={10}  >
            <Grid container item sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',mx:'auto'}}  width={'80%'} >
                <Grid item ><img src={Mainpic}/></Grid>
                <Grid item ><Typography variant={'h1'} marginTop={5}>Gets things done with TODo</Typography></Grid>
                <Grid item marginTop={3}><Typography variant={'title'}textAlign={'center'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in volutpat, tristique lacinia ut. Elementum non turpis nullam ipsum.</Typography></Grid>
            </Grid>
            <Grid item width={'80%'} sx={{mx:'auto'}}><Link to={'/Register'}><Button variant={'mainButton'}>Get Started</Button></Link></Grid>

        </Grid>
     );
}
 
export default Main;