import React from 'react';

import './App.css';

function App() {

  return (
      <div>
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
      </div>
  );

}

function Rating() {
  console.log("Rating rendering")
  return (<div>
    <Star/>
    <Star/>
    <Star/>
    <Star/>
  </div>);

}

function Accordion() {
  console.log("Accordion rendering")
  return <>
    <AccordionTitle/>
    <AccordionBody/>
  </>;
}

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
    </ul>
  </>
}

function Star() {
  console.log("Star rendering")
  return <div>star</div>;
}

function AppTitle() {
  return <>This is APP component</>
}
export default App;
