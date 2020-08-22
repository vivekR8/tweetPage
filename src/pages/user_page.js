import React from 'react';
import UserHeader from '../component/user_header/user_header';
import UserContent from '../component/user_content/user_content';



const UserPage = ()=>{
    const [changes,setChanges]= React.useState(false);

    const handleChange = ()=>{
        console.log('changes called from userpage')
        setChanges(true);
    }
    const revertChange=()=>{
        setChanges(false);
    }
    console.log('USER PAGE',changes);
    return(
    <div className="App">
        <UserHeader handleChange={handleChange}/>
        <br/>
        <UserContent revertChange={revertChange} />
    </div>
    );
}
    

export default UserPage;