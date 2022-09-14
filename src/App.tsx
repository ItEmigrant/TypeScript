import React, {useState} from 'react';

import './App.css';

import {Rating, ratingValueType} from "./components/Rating/Rating";

import {UnAccordion} from "./components/UnAccordion/UnAccordion";
import {UnRating} from "./components/UnConrtRating/UnRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnOnOf} from "./components/UnOnOff/UnOnOF";
import {OnOf} from "./components/UnOnOff/OnOF";


function App() {

    let [ratingValue, setRating] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [onValue, setOnValue] = useState<boolean>(false)
    return (
        <div className={"App1"}>


            <UnRating/>

            <Rating value={ratingValue} onClick={setRating}/>


            <UnAccordion titleValue={"Menu"}/>

            <UnAccordion titleValue={"Users"}/>


            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <Accordion titleValue={"Users"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <UnOnOf onChange={setOnValue}/> {onValue.toString()}
            <OnOf OnValue={onValue} setOnValue={setOnValue}/>
        </div>
    );

}

export default App;
