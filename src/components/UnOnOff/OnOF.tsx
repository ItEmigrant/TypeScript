import React from 'react';


type PropsOnOfType = {
    OnValue:boolean
    setOnValue: (onValue:boolean) => void
}


export const OnOf = (props:PropsOnOfType) => {



    const On = {
        marginRight: "3px",
        fontSize: "x-large",
        padding: "5px",
        borderRadius: "9px",
        height: "80px",
        width: "80px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.OnValue ? "green" : "white"

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
        backgroundColor: props.OnValue ? "white" : "red"

    };

    const Ind = {
        borderRadius: "20px",
        height: "40px",
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.OnValue  ? "green" : "red"

    };

    function onValueHandler() {
        props.setOnValue(true)
    }
    function offValueHandler() {
        props.setOnValue(false)
    }

    return (
        <div>
            <div style={On} onClick={onValueHandler}>On</div>
            <div style={Off} onClick={offValueHandler}>Of</div>
            <div style={Ind}></div>

        </div>
    );
};

