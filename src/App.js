import React,{useState} from 'react';
import AddUser from './components/users/AddUser';
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
    <div>
      <AddUser addNewUser={addNewUserHandler}/>
      <UserList users={usersData}/>
    </div>
  );
} 

export default App;
