import React,{useState,Fragment} from 'react';
import AddUser from './components/users/AddUser';
import Wrapper from './components/helpers/Wrapper';
import UserList from './components/users/UserList';
function App() {
  const [usersData,setUserData]=useState([]);
  const addNewUserHandler=(userDataObject)=>{
    setUserData((prevUserData)=>{
      return(
        [userDataObject,...prevUserData]
      );
    })
  }
  return (
    <Fragment>
      <AddUser addNewUser={addNewUserHandler}/>
      <UserList users={usersData}/>
    </Fragment>
  );
} 

export default App;
