import React from "react"
import {Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'

const Profile = () => {
    return (
        <Grid>
            <Paper elevation={10} style={{padding :20,height:'70vh',width:280, margin:"20px auto"}}>
                <h4 style={{padding:0, margin:0}}>Set up your profile</h4>
                <p style={{padding:0, marginTop:"2%", fontSize:'12px'}}>Fill in the required details and click Proceed.</p>

                <Grid align='center' style={{marginTop:"10%"}}>
                    <Avatar style={{ backgroundColor: "#e91e46", width:'80px', height:'80px' }}/>
                    <p style={{fontSize:'12px'}}>Profile Picture</p>
                </Grid>
                
                <TextField label='Name' placeholder='Enter name' fullWidth/>
                <TextField label='Date of Birth' placeholder='Enter D.O.B' fullWidth />
                <TextField label='Gender' placeholder='Enter gender' fullWidth />
                <TextField label='Location' placeholder='Enter location' fullWidth/>
          
                <Button color='primary' variant="contained" style={{marginTop:'10%', backgroundColor:'#e91e46'}} fullWidth>Save</Button>
            </Paper>
        </Grid>
    )
}

