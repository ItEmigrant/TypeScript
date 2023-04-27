import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const ExampleUseEffect = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);


    useEffect(() => {

        document.title = counter.toString();
    }, [counter]);

    useEffect(() => {

        document.title = counter.toString();
    });

    useEffect(() => {

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


    /*useEffect(() => {

        setInterval(() => {
            console.log('setInterval')
           setCounter((state)=>state+1)

        }, 2000)
    }, []);
*/

    return <>
        Hello, counter: {counter}, {/*fake:  {fake}*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Count+</button>*/}

    </>

}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0);
    console.log("Example rendered: " + counter)


    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('Reset Effect: ' + counter)
        }
    }, [counter]);

    const callBack = () => setCounter(counter + 1)
    return <>
        Hello, counter: {counter}
        <button onClick={callBack}>+</button>

    </>

}

export const OnTrackerExample = () => {

    const [text, setText] = useState('');
    console.log("Example rendered: " + text)


    useEffect(() => {

        const handler = (event: KeyboardEvent) => {
            console.log(event.key)
            setText(text + event.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [text])
}


export const TimeOutExample = () => {
    console.log("Component rendered")
    const [text, setText] = useState('');


    useEffect(() => {
        console.log('Effect rendered')
        const setTimeOutId = setTimeout(() => {
            console.log('TimeOut')
            setText('3 seconds passed')
        }, 5000)
        return () => {
            clearTimeout(setTimeOutId)
        }
    }, [text])

    return <>
        type Text: {text}
    </>

}
