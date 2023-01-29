import React, {useReducer} from "react";

type AccordionPropsType1 = {
    titleValue: string
    //collapsed: boolean
}

type reducerActionType = {
    type: "TOGGLE-COLLAPSED"

}


const reducerUnAccording = (state: boolean, action: reducerActionType) => {

    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return !state;

        default:
            return state;
    }

}

export function UnAccordion(props: AccordionPropsType1) {
    console.log("Accordion rendering")

    /* let [collapsed, setCollapsed] = useState(true);*/
    let [collapsed, dispatch] = useReducer(reducerUnAccording, true);

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {

            dispatch({type: "TOGGLE-COLLAPSED"})
        }}/>


        {!collapsed && <AccordionBody/>}
    </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <><h3 onClick={() => {
        props.onClick()
    }}>=={props.title}==</h3></>
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
