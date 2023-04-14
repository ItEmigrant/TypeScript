import React, {useEffect, useState} from "react";


export default {
    title: "Clock demo"
};

type ClockExamplePropsType = {}


export const ClockExample = (props: ClockExamplePropsType) => {

    const [time, setTime] = useState(new Date())
    console.log("Example")

    useEffect(() => {
        console.log("render")
        setInterval(() => {
            console.log('TIME')
            setTime(new Date())
        }, 1000)
    }, []);

    function get2digitalString(num: number) {
        return num < 10 ? "0" + num : num
    }

    const seconds = get2digitalString(time.getSeconds())
    const minutes = get2digitalString(time.getMinutes())
    const hours = get2digitalString(time.getHours())

    return <>
        <div>Year: {time.getFullYear()} </div>
        <div>Month: {time.getMonth()} </div>
        <div>Date: {time.getDate()} </div>
        {/*<div>CLOCK - {a.getHours()}:{a.getMinutes()}:{seconds} </div>*/}
        <h1>CLOCK -
            {hours}:
            {minutes}:
            {seconds}
        </h1>

    </>

}