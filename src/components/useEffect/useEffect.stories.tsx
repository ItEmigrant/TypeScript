import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const ExampleUseEffect = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("Simple Example")

    useEffect(() => {
        console.log('useEffect only change counter')
        document.title = counter.toString();
    }, [counter]);

    useEffect(() => {
        console.log('useEffect work everytime')
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render, one time')
        document.title = counter.toString();
    }, []);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Count+</button>

    </>

}


export const SetTimeoutExample = () => {

  /*  const [fake, setFake] = useState(0);*/
    const [counter, setCounter] = useState(1);
    console.log("Example")


    useEffect(() => {

        setInterval(() => {
            console.log('setInterval')
           setCounter((state)=>state+1)

        }, 2000)
    }, []);


    return <>
        Hello, counter: {counter}, {/*fake:  {fake}*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Count+</button>*/}

    </>

}