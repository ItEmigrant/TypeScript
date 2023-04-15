import React, {useEffect, useState} from "react";


export default {
    title: "Clock demo"
};

type ClockExamplePropsType = {}

function get2digitalString(num: number) {
    return num < 10 ? "0" + num : num
}

export const ClockExample = (props: ClockExamplePropsType) => {

    const [time, setTime] = useState(new Date())
    console.log("Example")

    useEffect(() => {
        console.log("render")
        const intervalID = setInterval(() => {
            console.log('TIME')
            setTime(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, []);

    return <>
        <div>Year: {time.getFullYear()} </div>
        <div>Month: {time.getMonth()} </div>
        <div>Date: {time.getDate()} </div>
        {/*<div>CLOCK - {a.getHours()}:{a.getMinutes()}:{seconds} </div>*/}
        <h1>CLOCK -
            {get2digitalString(time.getHours())}:
            {get2digitalString(time.getMinutes())}:
            {get2digitalString(time.getSeconds())}
        </h1>

    </>

}