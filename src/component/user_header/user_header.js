import React from 'react'
import TweetDialog from '../dialog/dialog';
import {connect} from 'react-redux';
import './user_header.scss';
import API from '../../utils/API';

const UserHeader = ({currentUser,bio,...props})=>{
    //console.log('userheader',props)
    //API.get('/').then(res=>{console.log('header',res)})
    
return(
    <div className='header'>
        <div className='user-info'>
            <h1>{currentUser}</h1>
            <p>{bio}</p>
        </div>
        <TweetDialog 
        {...props}

        />
    </div>
);
}
const mapStateToprops =state=>({
    currentUser:state.User,
    bio:state.Bio
  })
export default connect(mapStateToprops)(UserHeader);