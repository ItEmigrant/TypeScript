import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnOnOf} from "./UnOnOF";



export default {
    title: 'UnOnOF',
    component: UnOnOf,
}


const callback = action("on or off clicked");

export const onUnOnOf = () => <UnOnOf onChange={callback} defaultOn={true}/>
export const ofUnfOnOf = () => <UnOnOf onChange={callback} defaultOf={false}/>


export const ChangeModeUnOnOf = () => {
    return <UnOnOf onChange={onValue => onValue}/>
}





