import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
  }));

  const Card = ({tweet})=>{
    
    const classes = useStyles();

      return(
        <List className={classes.root}>
        <ListItem >
          <ListItemAvatar style={{'paddingRight':'4px'}}>
            <Avatar 
            className={classes.large}
            src={`https://picsum.photos/seed/${tweet.tweet}/200/300`}
            />
            
          </ListItemAvatar>
          <ListItemText primary={tweet.tweet} secondary={tweet.time} />
        </ListItem>
        </List>
      );
  }

  export default Card;