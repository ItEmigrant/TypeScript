import React, {useState} from 'react';
import {OnOf} from "./OnOF";
import {Rating, ratingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOF',
    component: OnOf,
}


const callback = action("on or off clicked")
export const onOnOf = () => <OnOf OnValue={true} setOnValue={callback}/>
export const offOnOf = () => <OnOf OnValue={false} setOnValue={callback}/>


export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean> (true)
    return <OnOf OnValue={mode} setOnValue={setMode}/>
}





