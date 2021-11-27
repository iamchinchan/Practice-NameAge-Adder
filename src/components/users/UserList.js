import react from 'react';
import UserData from './UserData';
import Card from '../ui/Card';
import styles from '../css/UserList.module.css';
const UserList=(props)=>{
    return(
        <Card className={styles.users}>
            <ul>
                {props.users.map((user)=>{
                    return(
                        <UserData key={user.id} user={user}/>
                    );
                })}
            </ul>
        </Card>
    );
}

export default UserList;