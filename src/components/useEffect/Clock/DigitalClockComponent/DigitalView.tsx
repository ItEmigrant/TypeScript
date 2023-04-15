import s from "../clock.module.css";
import React from "react";
import {ClockViewPropsType, get2digitalString} from "../Clock";

export const DigitalView = (props: ClockViewPropsType) => {
    return <div>
        <div>Year: {props.time.getFullYear()} </div>
        <div>Month: {props.time.getMonth()} </div>
        <div>Date: {props.time.getDate()} </div>
        <h1 className={s.clock}>CLOCK -
            {get2digitalString(props.time.getHours())}:
            {get2digitalString(props.time.getMinutes())}:
            {get2digitalString(props.time.getSeconds())}
        </h1>
    </div>
}