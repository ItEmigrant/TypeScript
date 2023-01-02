import React, {ChangeEvent, useRef, useState} from 'react';

export const Input = () => {

   const [value, setValue ] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

            const actualValue = event.currentTarget.value
            setValue(actualValue)

    }

    const onClickHandler = () => {
            const el = inputRef.current as HTMLInputElement;
            setValue(el.value)
    }


    return (
        <>
            <div>
              Uncontrolled Input  <input/>
            </div>

            <div>
               Track Value of Uncontrolled Input With  <input value={value} onChange={onChangeHandler}/> - {value}
            </div>

            <div>
                Track Value of Input With  <input ref={inputRef} /> <button onClick={onClickHandler}>save</button> - actual value: {value}

            </div>

            <div>
              Controlled Input With Fixed Value  <input value={"it-incubator.pl"}/>
            </div>

        </>
    );
};

