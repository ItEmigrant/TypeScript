import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {UnAccordion} from "./UnAccordion";


export default {
    title: 'UnAccordion',
    component: UnAccordion,
}


export const ChangeMode = () => {
    return <UnAccordion titleValue={'Menu'} key={3}/>
}





