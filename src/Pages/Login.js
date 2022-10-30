import React from 'react';
import { Button, Grid, Typography,TextField } from '@mui/material';
import { Link } from "react-router-dom";
import login from '../Image/Login.png'
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
const Login = () => {

  const [form,setForm]=useState({username:'',password:""});
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

 
 
  return (
    <Grid  sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',mx:'auto',minHeight:"600px"} }  spacing={4}  height={'80%'} marginTop={5}>
        <Grid size="small"  item sx={{display:'flex',flexDirection:'column',alignItems:'center'}} width={'80%'}  >
            <Grid item marginBottom={2} ><Typography variant={'h1'}>Welcome Back!</Typography></Grid>
            <Grid item ><img src={login}/></Grid>
        </Grid>
        <Grid item width={'80%'} >
          <TextField  placeholder='Enter your full name' value={form.username} name={'username'} type="text" margin="dense"  fullWidth  onChange={handleChange} sx={{borderRadius:"25px" , backgroundColor:"#FFF" , border:"none" }} size="small" />
          <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        {/* <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" /> */}
      </FormControl>
          
          <TextField   placeholder="Confirm password" type="password" value={form.password} name={'password'} margin="dense" fullWidth   onChange={handleChange} sx={{backgroundColor:"#FFF"}} size="small"/>
        </Grid>
        <Grid item >
          <Typography variant={'subtitle1'} color={'primary.dark'}>Forget Password</Typography>
        </Grid>
        <Grid item width={'80%'} >
           <Grid >
            <Link to={'/welcome'} >
              <Button variant={'mainButton'} > Login </Button>

              </Link>
           </Grid>
           <Grid item sx={{mx:'auto'}} textAlign={'center'} p={2} >
              <Typography variant={'subtitle2'} sx={{display:'inline'}}>Don’t have an account?<Link to={'/Register'}><Typography sx={{display:'inline'}} variant={'subtitle2'} color={'primary.main'}> Sign Up</Typography></Link> </Typography>
           </Grid>
        </Grid>


    </Grid>
  )
}

export default Login
