import React, { Component } from 'react';
import{connect} from 'react-redux';
//import {increment} from '../../redux/user/user.action';
import Card from '../card/card';
import {API} from '../../utils/API'
import axios from 'axios';

class UserContent extends React.Component{
    constructor(){
        super();

        this.state={
            showTweets:[],
            reqId:''
        }
    }

 
    
    

    async componentDidUpdate(){
        const {showTweets,reqId}=this.state
        const {tweets,revertChange} =this.props
        let blankArray=[...showTweets];
        console.log('request called')
        await axios.get(`/api/bin/${API}/req/${tweets}`)
        .then(response=>{console.log(response,'response',reqId)
       
        if(reqId!==tweets){
        console.log('second statement called',typeof(reqId),'tweets',typeof(tweets))
        this.setState({showTweets:blankArray})
        blankArray.push(response.data.body)
        this.setState({reqId:tweets},()=>{console.log('reqid',reqId)})
        }
    }).catch(error=>console.log(error))
        revertChange()
    }
    render(){
    const {showTweets}=this.state;
return(
    <div>
    {   (showTweets.length>0)?
    (//<p>here are your tweets</p>
        showTweets.map(item=>(<Card tweet={item}/>
          ))
        ):
            (
                <p>No Tweet Available</p>
            )
    }
        
    </div>
);
}
}
const mapStateToProps = state =>({
    tweets:state.Tweets
})


export default connect(mapStateToProps)(UserContent);