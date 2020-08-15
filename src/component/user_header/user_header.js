import React from 'react'
import TweetDialog from '../dialog/dialog';
import './user_header.scss';

const UserHeader = (props)=>{
    console.log('userheader',props)
return(
    <div className='header'>
        <div className='user-info'>
            <h1>{props.value}</h1>
            <p>{JSON.parse(sessionStorage.getItem(props.value)).bio}</p>
        </div>
        <TweetDialog {...props}/>
    </div>
);
}
export default UserHeader;