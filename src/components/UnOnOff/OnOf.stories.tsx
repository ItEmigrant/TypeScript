import React, {useState} from 'react';
import {OnOf} from "./OnOF";
import {Rating, ratingValueType} from "../Rating/Rating";


export default {
    title: 'OnOF',
    component: OnOf,
}

export const onOnOf = () => <OnOf OnValue={true} setOnValue={a=>a}/>
export const offOnOf = () => <OnOf OnValue={false} setOnValue={a=>a}/>


export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean> (true)
    return <OnOf OnValue={mode} setOnValue={setMode}/>
}





