import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import styles from "../css/AddUser.module.css";
import ErrorModal from "../ui/ErrorModal";
import UserData from "./UserData";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorModalRemover=()=>{
      setError(null);
  }
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "PLease enter a valid  age (>0)",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);
    const userDataObject = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.addNewUser(userDataObject);
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {error && (
        <ErrorModal removeModal={errorModalRemover} title={error.title} message={error.message} />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameHandler}
          ></input>
          <label htmlFor="age"> Age(Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
