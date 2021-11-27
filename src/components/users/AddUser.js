import React,{useState} from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import styles from '../css/AddUser.module.css';
import UserData from "./UserData";

const AddUser = (props) => {

    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');

    const usernameHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }
    const ageHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
        return;
    }
    if(+enteredAge<1){
        return;
    }
        console.log(enteredUsername,enteredAge);
    const userDataObject={
        username:enteredUsername,
        age:enteredAge,
        id:Math.random().toString(),
    }
    props.addNewUser(userDataObject);
    setEnteredAge('');
    setEnteredUsername('');
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input id="username" value={enteredUsername} type="text" onChange={usernameHandler} ></input>
        <label htmlFor="age"  > Age(Year)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageHandler}></input>
        <Button type="submit" >Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
