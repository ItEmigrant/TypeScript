import React, {useEffect, useState} from "react";
import s from '../Clock/clock.module.css'

function get2digitalString(num: number) {
    return num < 10 ? "0" + num : num
}

type ClockPropsType = {
    mode: string
}
export const Clock = (props: ClockPropsType) => {

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
        <h1 className={s.clock}>CLOCK -
            {get2digitalString(time.getHours())}:
            {get2digitalString(time.getMinutes())}:
            {get2digitalString(time.getSeconds())}
        </h1>

    </>

}