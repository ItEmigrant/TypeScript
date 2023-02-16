import React, {useState} from "react";
import {ratingValueType} from "../Rating/Rating";

/*type RatingPropsType = {

    value: 1 | 2 | 3 | 4 | 5 | 0
}*/
type UnRatingPropsType = {
    defaultValue?: ratingValueType
    onChange: (value:ratingValueType) =>void
}

export function UnRating(props:UnRatingPropsType) {

    let [selected, setSelected] = useState<ratingValueType>(props.defaultValue ? props.defaultValue : 0)

    console.log(selected)

    return (

        <div>

            <Star selected={selected > 0} setSelected={()=>{setSelected(1); props.onChange(1)}} />

            <Star selected={selected > 1} setSelected={()=>{setSelected(2); props.onChange(2)}} />

            <Star selected={selected > 2} setSelected={()=>{setSelected(3); props.onChange(3)}} />

            <Star selected={selected > 3} setSelected={()=>{setSelected(4); props.onChange(4)}} />

            <Star selected={selected > 4} setSelected={()=>{setSelected(5); props.onChange(5)}} />

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


