import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log(props)

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={(e) => props.onClick()}>=={props.title}==</h3>
}

function AccordionBody() {

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