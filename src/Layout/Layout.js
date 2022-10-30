import React from 'react';
import {Grid} from '@mui/material';
import { Outlet } from 'react-router-dom';
import elipse from '../Image/elipse.png'
const Layout = () => {
    return ( 
    <Grid>
        <Grid container  position={'relative'} xs={12} md={5} marginX={'auto'} height={'auto'} bgcolor={'#EEE'} marginTop={{md:5}} >
            <Grid  xs={5} position={'absolute'} > <img width={'100%'}  src={elipse}/></Grid>
            <Outlet/>
        </Grid>
    </Grid>
     );
}
 
export default Layout;