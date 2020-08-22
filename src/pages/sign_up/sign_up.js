import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import API from '../../utils/API';
import {setCurrentUser} from '../../redux/user/user.action'
import axios from 'axios';



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
    
     handleSubmit = async(event)=>{
        event.preventDefault();
        

        
        // await axios.post('https://postb.in/1597911846559-9096596310846',
        // {
        //     currentUser:this.state.user,
        //     bio:this.state.bio
        // })
        // .then((response)=>{console.log('signup api call',response)
            this.props.setCurrentUser({
                currentUser:this.state.user,
                bio:this.state.bio,
            })
    //})
        //.catch((error)=>{console.log(error)});
        // console.log('content',JSON.stringify(content))
        // if (sessionStorage.getItem(`${currentUser}`)) {
        //   return <UserPage value={currentUser} />
        //   } 
        // else {
        //     if (currentUser === '' ) {
        //       return <SignInAndSignUp/>
        //     } else {
        //         sessionStorage.setItem(`${currentUser}`, JSON.stringify(content));
        //       return  <UserPage value={currentUser} />
        //     }

        // }
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
                    <Button type='submit' className='button' variant="outlined">Make my page</Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect( null,mapDispatchToProps)(SignUp);