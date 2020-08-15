import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import './sign-up.scss';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            user:'',
            bio:''
        }
    }
    
    handleChange = (event)=>{
        const {name,value} = event.target;
        console.log('name',name,'value',value);
        this.setState({[name]:value})
    }
    
    render(){
        const {user,bio} = this.state
        return(
            <div  className='sign-up'>
                <h1>Welcome! Make your Tweet Page</h1>
                <p>Your data is stored locally on session storage</p>
                <span style={{color:'gray'}}>If already a user enter your user name</span>
                <form 
                onSubmit={this.handleSubmit}
                className='form' noValidate autoComplete="off">
                <TextField required
                    name='user'
                    className='text' 
                    id="standard-required" 
                    label="User Name"
                    onChange={this.handleChange}
                    value= {user}
                    />
                
                <TextField
                    required
                    name='bio'
                    style={{'paddingTop':'12px'}}
                    className='text'
                    rows='10' 
                    multiline='true'
                    id="outlined-uncontrolled"
                    label="BIO"
                    variant="outlined"
                    onChange={this.handleChange}
                    value={bio}
                />
                <Link 
                
                to={{pathname:'/userPage',
                state:{
                    currentUser:user,
                    currentBio:bio
                }}}
                
                style={{'textAlign':'center'}}>

                    <Button type='submit' className='button' variant="outlined">Make my page</Button>
                </Link>
                </form>
            </div>
        );
    }
}

export default SignUp;