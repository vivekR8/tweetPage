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


const TweetDialog = ({value,changes})=>{
    const [open, setOpen] = React.useState(false);
    const [newTweet,setTweet] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = ()=>{
        setTweet('');
        //setting Time value
        let time = Date(Date.now());
        let d =time.lastIndexOf(':')+3;
        time = time.substring(0,d)
        //updating user
        let user = JSON.parse(sessionStorage.getItem(value))
        let createdTweet = {}
        createdTweet['tweet']=newTweet;
        createdTweet['time'] = time;
        user.tweets.push(createdTweet)
        sessionStorage.setItem(`${value}`,JSON.stringify(user))
        changes();
        console.log('changes called from dialog');
        setOpen(false);
    };
    return(
        <div className='tweet-button'>
            <Fab variant="extended" onClick={handleClickOpen}>
                <TwitterIcon style={{'paddingRight':'2px'}}  />
                new tweet
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            onChange={(e)=>setTweet(e.target.value)}
            value={newTweet}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Tweet
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}
export default TweetDialog;