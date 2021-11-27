import React, { useState, useRef, useReducer } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import styles from "../css/AddUser.module.css";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper";
import UserData from "./UserData";

const AddUser = (props) => {
  
  const nameInputRef = useRef(); //return a value which allows us to to work with that ref later,
  // allows us to work with the element to which we are going to connect with
  const ageInputRef = useRef();
  //just for reading values refs are better
  //but if we want to re-evaluate the whole component and will changing values then use useState
  const [error, setError] = useState();

  const errorModalRemover = () => {
    setError(null);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "PLease enter a valid  age (>0)",
      });
      return;
    }
    console.log(enteredName, enteredUserAge);
    const userDataObject = {
      username: enteredName,
      age: enteredUserAge,
      id: Math.random().toString(),
    };
    props.addNewUser(userDataObject);

    //should not often use
    nameInputRef.current.value="";
    ageInputRef.current.value="";
  };
  //first time react reaches this code or renders this code, it will actually set the value stored in nameinputRef to the native dom element thats
  //is rendered based on this input,
  //what will end up inside of nameInputRef in the end will really be a real dom element later.

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          removeModal={errorModalRemover}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age"> Age(Year)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
