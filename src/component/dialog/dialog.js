import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TwitterIcon from '@material-ui/icons/Twitter';
import Fab from '@material-ui/core/Fab';
import {setTweets} from '../../redux/user/user.action';
import axios from 'axios';
import {API} from '../../utils/API';
import {connect} from 'react-redux';

class TweetDialog extends React.Component{
  constructor(){
    super();
    this.state={
      open:false,
      newTweet:''
    }
  }
    

    handleClickOpen = () => {
        this.setState({open:true});
    };

    handleClose = () => {
      this.setState({open:false});
    };
    handleSubmit = async ()=>{
      this.setState({newTweet:''});
      console.log('newTweet',this.state.newTweet)
        //setting Time value
        let time = Date(Date.now());
        let d =time.lastIndexOf(':')+3;
        time = time.substring(0,d)
        const that =this
        
        let createdTweet = {}
        createdTweet['tweet']=this.state.newTweet;
        createdTweet['time'] = time;
        console.log('user dialog',createdTweet,typeof(user))
        await axios.post(('/'+API),
          createdTweet
        )
        .then(response=>
        that.props.receiveTweet({
          tweets: response.data
        })
        )
        .catch(error=>{console.log(error)})
        
        this.props.handleChange()
        this.setState({open:false});
    };
    render(){
    return(
        <div className='tweet-button'>
            <Fab variant="extended" onClick={this.handleClickOpen}>
                <TwitterIcon style={{'paddingRight':'2px'}}  />
                new tweet
            </Fab>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tweet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What's New! Share your thoughts and let people know you
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your tweet"
            type="text"
            variant="outlined"
            fullWidth
            onChange={(e)=>this.setState({newTweet: e.target.value})}
            value={this.state.newTweet}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Tweet
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
    }
}

const mapStateToProps=state=>({
  userData:state.Tweets
})
const mapDispatchToProps = dispatch=>({
  receiveTweet:tweet=>dispatch(setTweets(tweet))
})

export default connect(mapStateToProps,mapDispatchToProps)(TweetDialog);