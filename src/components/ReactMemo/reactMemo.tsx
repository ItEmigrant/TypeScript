import React, {useMemo, useState} from 'react';

export const ReactMemoExample = () => {

    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA: number;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                /*const fakeValue = Math.random();*/
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        FACTORIAL FOR NUMBER:
        <div>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
        </div>
        <hr/>
        <div>
            result for a = {resultA}
        </div>
        <div>
            result for b = {resultB}
        </div>
    </>

};


const UsersXX = (props: { users: Array<string> }) => {
    console.log("USERS XX")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
}

const Users = React.memo(UsersXX);

export const Example2helpMemo = () => {
    console.log(":)")

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Bob", "Artur", "Sasha"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users, "Ala" + new Date().getDate()])}>addUser</button>
            {counter}
            <Users users={newArray}/>

        </>

    );

};


