import React, {useState} from 'react';

import './App.css';

import {Rating, ratingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/UnOnOff/OnOff";
import {UnAccordion} from "./components/UnAccordion/UnAccordion";
import {UnRating} from "./components/UnConrtRating/UnRating";
import {Accordion} from "./components/Accordion/Accordion";
import {ContrOnOf} from "./components/OnOff/ContrOnOf";

function App() {

    let [switchOn, setSwitchOn] = useState<boolean>(false);
    let [ratingValue, setRating] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    return (
        <div className={"App1"}>


            Article 2

            <UnRating/>

            <Rating value={ratingValue} onClick={setRating}/>

            <OnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <ContrOnOf on={switchOn} onChange={setSwitchOn}/>

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
        </div>
    );

}

export default App;
