import React, { useCallback } from "react";
import styles from '../css/UserList.module.css';

const UserData = (props) => {
  return (
    <div className={styles.userslist}>
      <li key={props.user.id}>
        {props.user.username} ({props.user.age} years old)
      </li>
    </div>
  );
};

export default UserData;
