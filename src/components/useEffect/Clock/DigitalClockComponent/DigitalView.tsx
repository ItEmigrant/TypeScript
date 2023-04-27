import s from "../clock.module.css";
import React from "react";
import {ClockViewPropsType} from "../Clock";
import {DataForClock} from "../dataForClock";

export function get2digitalString(num: number) {
    return num < 10 ? "0" + num : num
}

export const DigitalView = (props: ClockViewPropsType) => {
    return <div>
        <DataForClock time={props.time}/>
        <h1 className={s.clock}>CLOCK -
            {get2digitalString(props.time.getHours())}:
            {get2digitalString(props.time.getMinutes())}:
            {get2digitalString(props.time.getSeconds())}
        </h1>
    </div>
}