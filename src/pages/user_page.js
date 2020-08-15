import React from 'react';
import UserHeader from '../component/user_header/user_header';
import UserContent from '../component/user_content/user_content';



const UserPage = (props)=>{
    const [changes,setChanges]= React.useState(false);

    const handleChange = ()=>{
        console.log('changes called from userpage')
        setChanges(true);
    }
    const revertChange=()=>{
        setChanges(false);
    }
    console.log('USER PAGE',props);
    return(
    <div className="App">
        <UserHeader changes={handleChange} {...props} />
        <br/>
        <UserContent changes={changes} revertChange={revertChange}  {...props}/>
    </div>
    );
}
    

export default UserPage;