import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {ComponentStory} from "@storybook/react";

const colorsCategory = {
    table: {
        category: "colors"
    }
}

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...colorsCategory

        }
    }
}


const callback = action("Accordion callback")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const AccordionCollapsed = Template.bind({})

AccordionCollapsed.args = {
    titleValue: "Menu",
    onClick: callback,
    onChange: callback,
    collapsed: true,
    items: []
}

export const AccordionUnCollapsed = Template.bind({})

AccordionUnCollapsed.args = {
    titleValue: "Menu",
    onClick: callback,
    onChange: callback,
    collapsed: false,
    items: [{title: '1', value: 1}, {title: '2', value: 1}]
}


/*export const AccordionUnCollapsed = () => <Accordion titleValue={"Menu"} onClick={callback} onChange={callback}
                                                     collapsed={false}
                                                     items={[{title: '1', value: 1}, {title: '2', value: 1}]}/>*/


export const ChangeMode: ComponentStory<typeof Accordion> = (args) => {

    const [mode, setMode] = useState<boolean>(false)

    return <Accordion {...args} collapsed={mode} onChange={() => {
        setMode(!mode)
    }}/>

}
ChangeMode.args = {
    titleValue: 'Menu',
    onClick: callback,
    items: [
        {title: 'Alisa', value: 1},
        {title: 'Bogdan', value: 2},
        {title: 'Artur', value: 3},
        {title: 'LUDA', value: 4}]
}






