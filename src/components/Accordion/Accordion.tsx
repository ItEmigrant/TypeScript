import React from "react";

function Accordion() {
    console.log("Accordion rendering")
    return <>
        <AccordionTitle/>
        <AccordionBody/>
    </>;
}

export default Accordion;

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return <>Menu</>
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