import React, {useEffect, useState} from "react";


export default {
    title: "Clock demo",
}

export const ClockExample = () => {
    let a = new Date();

   const [time, setTime] = useState(a.getTime())
    console.log("Example")

    useEffect(()=>{
        console.log("jjj")
        setInterval(()=>{
            setTime((time)=>time+1)
        }, 1000)
    })


    /*useEffect(() => {

        /!*setInterval(() => {
            console.log('setInterval')
          setSec((sec)=>sec+0.001)
        }, 1)
    },[seconds]);*!/*/
        let seconds = a.getSeconds()

    return <>
        <div>Year: {a.getFullYear()} </div>
        <div>Month: {a.getMonth()} </div>
        <div>Date: {a.getDate()} </div>
        {/*<div>CLOCK - {a.getHours()}:{a.getMinutes()}:{seconds} </div>*/}
        <h1>CLOCK - {a.getHours()}:{a.getMinutes()}:{seconds} </h1>

    </>

}