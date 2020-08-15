import React from 'react';
import Card from '../card/card';

class UserContent extends React.Component{
    constructor(){
        super();
        this.state={
            cardValue:null,
        }
    }

    static getDerivedStateFromProps(prevProps){
    console.log(prevProps)
    let store = (JSON.parse(sessionStorage.getItem(prevProps.value))).tweets
    prevProps.revertChange()
    return {cardValue:store}

    }

    // // componentDidUpdate(){
    // this.setState({cardValue:(JSON.parse(sessionStorage.getItem(this.props.value))).tweets});
    // this.props.changes();
    // console.log('user content cdm',this.props);
    // }
    render(){
        console.log('user content render',this.props);
return(
    <div>
    {   (this.state.cardValue===null)?(<p>No recent tweets</p>):
            (
            this.state.cardValue.reverse().map(item => 
           <Card heading={item.tweet} content={item.time} />
            ) )
    }
        
    </div>
);
}
}
export default UserContent;