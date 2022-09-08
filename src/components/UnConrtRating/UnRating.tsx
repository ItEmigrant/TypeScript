import React, {useState} from "react";

/*type RatingPropsType = {

    value: 1 | 2 | 3 | 4 | 5 | 0
}*/

export function UnRating() {

    let [selected, setSelected] = useState(0)

    return (
        <div>

            <Star selected={selected > 0} setSelected={setSelected} value={1}/>

            <Star selected={selected > 1} setSelected={setSelected} value={2}/>

            <Star selected={selected > 2} setSelected={setSelected} value={3}/>

            <Star selected={selected > 3} setSelected={setSelected} value={4}/>

            <Star selected={selected > 4} setSelected={setSelected} value={5}/>

        </div>
    )

}

type StarPropsType = {
    selected: boolean
    value: 1|2|3|4|5
    setSelected: (value: number)=> void
}

function Star(props: StarPropsType) {

   return  <span onClick={()=>{props.setSelected(props.value)}}> {props.selected ? <b>star</b> : "star"}
    </span>
}


