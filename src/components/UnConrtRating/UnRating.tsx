import React, {useState} from "react";

/*type RatingPropsType = {

    value: 1 | 2 | 3 | 4 | 5 | 0
}*/

export function UnRating() {

    let [selected, setSelected] = useState(0)

    return (
        <div>
           <button onClick={()=>(setSelected(0))}>0</button> <Star selected={selected > 0}/><button onClick={()=>(setSelected(1))}>1</button>
            <Star selected={selected > 1}/><button onClick={()=>(setSelected(2))}>2</button>
            <Star selected={selected> 2}/><button onClick={()=>(setSelected(3))}>3</button>
            <Star selected={selected > 3}/><button onClick={()=>(setSelected(4))}>4</button>
            <Star selected={selected> 4}/><button onClick={()=>(setSelected(5))}>5</button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b> star</b></span>
    } else {
        return <span> star </span>
    }
}
