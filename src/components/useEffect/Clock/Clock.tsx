import React, {useEffect, useState} from "react";
import {DigitalView} from "./DigitalClockComponent/DigitalView";
import {AnalogView} from "./AnalogClockComponent/AnalogView";

export type ClockViewPropsType = {
    time: Date
}
type ClockPropsType = {
    mode?: 'digital' | 'analog'
}
export const Clock = (props: ClockPropsType) => {

    const [time, setTime] = useState(new Date())
    console.log("Example")

    useEffect(() => {
        console.log("render")
        const intervalID = setInterval(() => {
            console.log('TIME rendered')
            setTime(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, []);


    let View;
    switch (props.mode) {
        case "analog" :
            View = <AnalogView time={time}/>
            break;

        case "digital" :
        default:
            View = <DigitalView time={time}/>
    }

    return <>
        {View}
    </>

}


