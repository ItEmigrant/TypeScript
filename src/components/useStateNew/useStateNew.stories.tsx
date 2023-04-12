import React, {useState} from "react";

export default {
    title: "UseStateNew demo",
}

function generateData() {
    console.log('generateData')
    return 1;
}

export const Example = () => {
    console.log("Example")


    const [counter, setCounter] = useState(generateData);


    const CountPlus = () => {
        console.log("+")
        setCounter(changer)    }


    const changer = (state: number) => state + 1

    return <>
        <button onClick={CountPlus}>+</button>
        {counter}
    </>

}