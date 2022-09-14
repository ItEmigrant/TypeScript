import React, {useState} from 'react';


type PropsOnOfType = {
    onChange: (onValue:boolean)=>void
}


export const UnOnOf = (props:PropsOnOfType) => {

    let [onValue, setOnValue] = useState(true)

    const On = {
        marginRight: "3px",
        fontSize: "x-large",
        padding: "5px",
        borderRadius: "9px",
        height: "80px",
        width: "80px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: onValue ? "green" : "white"

    };

    const Off = {
        marginRight: "3px",
        fontSize: "x-large",
        padding: "5px",
        borderRadius: "9px",
        height: "80px",
        width: "80px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: onValue ? "white" : "red"

    };

    const Ind = {
        borderRadius: "20px",
        height: "40px",
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: onValue ? "green" : "red"

    };

    function onValueHandler() {
        setOnValue(true)
        props.onChange(true)

    }
    function offValueHandler() {
        setOnValue(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={On} onClick={onValueHandler}>On</div>
            <div style={Off} onClick={offValueHandler}>Of</div>
            <div style={Ind}></div>

        </div>
    );
};

