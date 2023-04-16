import React from 'react';
import {ClockViewPropsType} from "./Clock";

export const DataForClock: React.FC<ClockViewPropsType> = ({time}) => {

    return <div>
            <div>Year: {time.getFullYear()} </div>
            <div>Month: {time.getMonth()} </div>
            <div>Date: {time.getDate()} </div>
        </div>
}

