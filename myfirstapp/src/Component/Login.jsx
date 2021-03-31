import React from 'react';
import {Grid,Paper,Avatar, TextField, Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {NavLink} from 'react-router-dom';
const paperStyle = {padding:"20px",height:"70vh",width:"280px",margin:"30px auto"}
const avtarStyle ={backgroundColor:"#4ed290"};
const cssStyle={textDecoration:"none"};
const Login = ()=>{
    return(
    <Grid>
        <Paper evaluation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avtarStyle}><LockOutlinedIcon/> </Avatar>
            <h2>Sign in</h2>
            <TextField label="Username" placeholder="Enter username" fullWidth required/>
            <TextField label = "password" placeholder="Enter password" fullWidth required/>
            <FormControlLabel
             control={
                 <Checkbox
                   
                     name="checkedB"
                     color="primary"
                 />
        }
        label="Remember me"
      /><br/>
  
      <NavLink to="/" style={cssStyle}><Button type="submit" color="primary" variant="contained">Sign in</Button></NavLink><br/><br/>
      <Typography><Link href="#">
        Forgot password?
        </Link>
        </Typography>
        <Typography>Do you have an account?
        <NavLink to="/register" style={cssStyle}>
        <Link href="#">
         
        Register</Link></NavLink>
     
        </Typography>
            </Grid>
        </Paper>
    </Grid> 
    );
}
export default Login;