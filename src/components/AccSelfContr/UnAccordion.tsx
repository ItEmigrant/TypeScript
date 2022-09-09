import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UnAccordion (props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(true);

        return <div>
            <AccordionTitle title={props.titleValue} onClick={()=>(setCollapsed(!collapsed))}/>


            {!collapsed && <AccordionBody/>}
        </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <><h3 onClick={()=>{props.onClick()}}>=={props.title }==</h3></>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    </>
}