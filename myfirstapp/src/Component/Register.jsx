import React from 'react';
import {Grid,Paper,Avatar, TextField, Button} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {NavLink } from 'react-router-dom';
const paperStyle = {padding:"20px",height:"70vh",width:"280px",margin:"30px auto"}
const avtarStyle ={backgroundColor:"#4ed290"};
const cssStyle={textDecoration:"none"}
const Register = ()=>{
    return(
    <Grid>
        <Paper evaluation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avtarStyle}><AddCircleOutlineIcon/> </Avatar>
            <h2>Sign Up</h2>
            <TextField label="Username" placeholder="Enter username" fullWidth required/>
            <TextField label="Email" placeholder="Enter email" fullWidth required/>
            <TextField label = "password" placeholder="Enter password" fullWidth required/>
            <TextField label = " Confirm password" placeholder="Enter confirm password" fullWidth required/>
            <FormControlLabel
             control={
                 <Checkbox
                   
                     name="checkedB"
                     color="primary"
                 />
        }
        label="I accept the terms and conditions"
      /><br/>
  
  <NavLink to="/" style={cssStyle}><Button type="submit" color="primary" variant="contained" >Register</Button></NavLink><br/><br/>
      
      
            </Grid>
        </Paper>
    </Grid> 
    );
}
export default Register;