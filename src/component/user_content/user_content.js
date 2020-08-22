import React, { Component } from 'react';
import{connect} from 'react-redux';
//import {increment} from '../../redux/user/user.action';
import Card from '../card/card';

class UserContent extends React.Component{
    constructor(){
        super();

        this.state={
            showTweets:null
        }
    }

    // static getDerivedStateFromProps(props){
    // console.log("GDSFP",props.tweets)
    
    // return {showTweets:props.tweets}

    // }
    
    

    componentDidUpdate(){
        const {showTweets}=this.state
        console.log('render called')
        if(showTweets===null){
            this.setState({showTweets:this.props.tweets})

        }
        else if(showTweets.length!==this.props.tweets.length){
        this.setState({showTweets:this.props.tweets})
        }
        this.props.revertChange()
    }
    render(){
    const {showTweets}=this.state;
    console.log('tweetssss',this.props.tweets,'state',showTweets);
return(
    <div>
    {   (showTweets && showTweets.length > 0)?
    (//<p>here are your tweets</p>
        showTweets.map(item=>(<Card tweet={item}/>))
        ):
            (
                <p>{showTweets}</p>
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