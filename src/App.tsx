import React from 'react';

import './App.css';
/*import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";*/
import {OnOff} from "./components/OnOff/OnOff";
import {UnAccordion} from "./components/AccSelfContr/UnAccordion";
import {UnRating} from "./components/UnConrtRating/UnRating";

function App() {

    return (
        <div className={"App1"}>
            {/* <PageTitle title={"This is APP component!"}/>
            <PageTitle title={"My friends!"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed = {true}/>
            <Accordion titleValue={"Users"} collapsed = {false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            <OnOff/>
            <UnAccordion titleValue={"Menu"}/>
            <UnAccordion titleValue={"Users"}/>
            <UnRating/>


        </div>
    );

}

/*type PageTitleProps = {
    title: string
}*/

/*function PageTitle(props: PageTitleProps) {
    return <><h1>{props.title}</h1></>
}*/

export default App;
