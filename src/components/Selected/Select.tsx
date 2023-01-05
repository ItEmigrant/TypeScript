import React from 'react';

type SelectPropsType = {
    value: any
    onChange:(value:any)=> void
    items:ItemType[]
}

type ItemType = {
    title:string
    value:any
}
export const Select = (props:SelectPropsType) => {
    return (
        <div>
            < br/>
            {props.value}
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}

        </div>
    );
};


