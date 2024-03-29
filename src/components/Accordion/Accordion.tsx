import React from "react";

type ItemType = {
    title: string
    value: any;
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    color?: string
    /**
     * callback that is called ....
     */
    onClick: (value:any)=>void
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={props.onChange}
                        color={props.color}
                       />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick }/>}
    </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={() => props.onClick()}  style={{color:props.color ? props.color : 'black'}}>=={props.title}==</h3>
}


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:string)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {

    return <>
        <ul>
            {props.items.map((el, index) => <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    </>
}