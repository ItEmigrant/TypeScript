import React, {useState} from 'react';

import './App.css';

import {Rating, ratingValueType} from "./components/Rating/Rating";

import {UnAccordion} from "./components/UnAccordion/UnAccordion";
import {UnRating} from "./components/UnConrtRating/UnRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnOnOf} from "./components/UnOnOff/UnOnOF";
import {OnOf} from "./components/UnOnOff/OnOF";
import {Input} from "./components/input/TrackInput";
import {ControlledInput} from "./components/input/controlledInput";
import {Select} from "./components/Selected/Select";
import {Example1} from "./components/useMemo/reactMemo";
import {Example2helpMemo, ReactMemoExample} from "./components/useReactMemo/useMemo";
import {LikeUseCallback} from "./components/useCallback/useCallback";
import {ExampleUseEffect, SetTimeoutExample} from "./components/useEffect/useEffect.stories";
import {ClockExample} from "./components/useEffect/clockProect.stories";




function App() {

    let [ratingValue, setRating] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [accordionMenuCollapsed, setMenuAccordionCollapsed] = useState<boolean>(true);
    let [onValue, setOnValue] = useState<boolean>(false)

    const onItemClick = (id: number) => {
        alert(`Hello users ${id} !!!`)
    }
    const [value, setValue] = useState(4)


    return (
        <div className={"App1"}>


            <UnRating onChange={() => {
            }}/>

            <Rating value={ratingValue} onClick={setRating}/>

            <UnAccordion titleValue={"Menu"}/>

            <UnAccordion titleValue={"Users"}/>


            <Accordion titleValue={"Menu"}
                       collapsed={accordionMenuCollapsed}
                       onChange={() => {
                           setMenuAccordionCollapsed(!accordionMenuCollapsed)
                       }} items={[]} onClick={onItemClick}/>

            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }} items={[
                {title: 'Alisa', value: 1},
                {title: 'Bogdan', value: 2},
                {title: 'Artur', value: 3},
                {title: 'LUDA', value: 4}]} onClick={onItemClick}/>

            <UnOnOf onChange={setOnValue}/> {onValue.toString()}
            <OnOf OnValue={onValue} setOnValue={setOnValue}/>

            <Input/>

            <ControlledInput/>

            <Example1/>
            <ExampleUseEffect/>
            <SetTimeoutExample/>
            <ClockExample/>



            <Example2helpMemo/>

            <ReactMemoExample/>

            <LikeUseCallback/>

            <Select value={value} name={"Names:"} onChange={setValue}
                    items={[
                        {title: 'Alisa', value: 1},
                        {title: 'Bogdan', value: 2},
                        {title: 'Artur', value: 3},
                        {title: 'LUDA', value: 4}
                    ]}/>

        </div>
    );

}

export default App;
