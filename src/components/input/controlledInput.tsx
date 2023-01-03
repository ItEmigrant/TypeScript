import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState("")
    const [parentBox, setParentBox] = useState(true)
    const [parentSelect, setParentSelect] = useState<string|undefined>(undefined)


    const change = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.value)
    }

    const changeCheck = (e:ChangeEvent<HTMLInputElement>) => {
        setParentBox(e.currentTarget.checked)
    }

    const changeSelected = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentSelect(e.currentTarget.value)
    }
    return (
        <>
            <div>
                <br/>
                Controlled Input <input value={parentValue} onChange={change}/>
            </div>
            <div>
                <br/>
                Controlled Checkbox <input type={"checkbox"} checked={parentBox} onChange={changeCheck}/>
            </div>

            <div>
                <br/>
                Controlled Select <select value={parentSelect} onChange={changeSelected}>
                <option value={'1'}>  None </option>
                <option value={'2'}> Krakow </option>
                <option value={'3'}> Kiev </option>
                <option value={"4"}> Toronto </option>
            </select>
            </div>
        </>
    );
};

