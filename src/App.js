import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserPage from './pages/user_page';
import SignInAndSignUP from './component/sign-in_and_sign_up/sign-in_and_sign-up';
import './App.css';
import SignInAndSignUp from './component/sign-in_and_sign_up/sign-in_and_sign-up';

const userPage = (props)=>{
  const {currentUser,currentBio} = props.location.state
  console.log('APP',currentUser,currentBio)
  let content = {}
        content['bio'] = currentBio
        content['tweets'] = []

        console.log('content',JSON.stringify(content))
        if (sessionStorage.getItem(`${currentUser}`)) {
          return <UserPage value={currentUser} />
          } 
        else {
            if (currentUser === '' ) {
              return <SignInAndSignUp/>
            } else {
                sessionStorage.setItem(`${currentUser}`, JSON.stringify(content));
              return  <UserPage value={currentUser} />
            }

        }
  //return <UserPage value={props.location.state} />
}

const App=()=> {
  return (
    <Router >
      <Switch>
        <Route exact path='/'><SignInAndSignUP/></Route>
        <Route exact path='/userPage' component={userPage}/>
      </Switch>
      {/*  */}
      
    </Router>
  );
}

export default App;
