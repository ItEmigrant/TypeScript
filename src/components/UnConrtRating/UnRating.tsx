import React, {useState} from "react";

/*type RatingPropsType = {

    value: 1 | 2 | 3 | 4 | 5 | 0
}*/

export function UnRating() {

    let [selected, setSelected] = useState(0)

    console.log(selected)

    return (

        <div>

            <Star selected={selected > 0} setSelected={()=>{setSelected(1)}} />

            <Star selected={selected > 1} setSelected={()=>{setSelected(2)}} />

            <Star selected={selected > 2} setSelected={()=>{setSelected(3)}} />

            <Star selected={selected > 3} setSelected={()=>{setSelected(4)}} />

            <Star selected={selected > 4} setSelected={()=>{setSelected(5)}} />

        </div>

    )

}

type StarPropsType = {
    selected: boolean

    setSelected: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.setSelected()}}>
       {props.selected ? <b>star </b> : "star "}
    </span>
}


