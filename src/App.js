import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import UserPage from './pages/user_page';
import SignInAndSignUP from './component/sign-in_and_sign_up/sign-in_and_sign-up';
import './App.css';

// const userPage = (props)=>{
//   const {currentUser,currentBio} = props.location.state
//   console.log('APP',currentUser,currentBio)
//   let content = {}
//         content['bio'] = currentBio
//         content['tweets'] = []

//         console.log('content',JSON.stringify(content))
//         if (sessionStorage.getItem(`${currentUser}`)) {
//           return <UserPage value={currentUser} />
//           } 
//         else {
//             if (currentUser === '' ) {
//               return <SignInAndSignUp/>
//             } else {
//                 sessionStorage.setItem(`${currentUser}`, JSON.stringify(content));
//               return  <UserPage value={currentUser} />
//             }

//         }
//   //return <UserPage value={props.location.state} />
// }

const App=({currentUser})=> {
  console.log('app',currentUser)
  return (
    <Router >
      <Switch>
        <Route exact path='/' render={()=>currentUser?(<Redirect to='/userPage'/>):(<SignInAndSignUP/>) }/>
        <Route exact path='/userPage'><UserPage/></Route>
      </Switch>
      {/*  */}
      
    </Router>
  );
}
const mapStateToprops =state=>({
  currentUser:state.User
})

export default connect(mapStateToprops)(App);
