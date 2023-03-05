import React, {useState} from 'react';


const NewMessagesCounter = (props: { count: number }) => {

    return <div> {props.count} </div>

}
const UsersX = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersX);

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Bob", "Artur", "Sasha"]);

    const CountPlus =()=> setCounter(counter+1);

    const addUsers =()=> {
    const newUser = [...users, 'Bogdan' + new Date().getDate()]

        setUsers(newUser);
    }

    return (
        <>
            <button onClick={CountPlus}>+</button>
            <button onClick={addUsers}>Add</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>

        </>

    );

};

