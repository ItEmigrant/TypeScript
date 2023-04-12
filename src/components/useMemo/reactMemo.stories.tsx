import React, {useState} from "react";

export default {
    title: "React.memo demo",
}


const Counter = (props: { count: number }) => {
    console.log('count plus')
    return <div> {props.count} </div>

}

const Users = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const UsersMemo = React.memo(Users)

const CounterMemo = React.memo(Counter)

export const Example = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Bob", "Artur", "Sasha"]);

    const CountPlus = () => {
        console.log("+")
        setCounter(counter+1)
    }

    const AddUser = () => {
        let newUsers = [...users, "Bobby" + new Date().getDate()]

        setUsers(newUsers)
    }
    return <>
        <button onClick={CountPlus}>+</button>
        <button onClick={AddUser}>add user</button>
        <CounterMemo count={counter}/>
        <UsersMemo users={users}/>

    </>

}