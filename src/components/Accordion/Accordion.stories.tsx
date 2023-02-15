import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,
}


const callback = action("Accordion callback")

export const AccordionCollapsed = () => <Accordion titleValue={"Menu" } onClick={callback} onChange={callback} collapsed={true} items={[]}/>

export const AccordionUnCollapsed = () => <Accordion titleValue={"Menu" } onClick={callback} onChange={callback} collapsed={false} items={[{title:'1', value:1}, {title:'2', value:1}]}/>


export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean> (false)
    return <Accordion titleValue={'Menu'}  onClick={callback} onChange={()=>setMode(!mode)} collapsed={mode} items={[{title:'1', value:1}, {title:'2', value:1}]}/>
}





