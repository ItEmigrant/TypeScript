import React, {useMemo, useState} from 'react';

export const ReactMemoExample = () => {

    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA: number;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
                console.log(fakeValue)
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        FACTORIAL FOR NUMBER:
        <div>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
        </div>
        <hr/>
        <div>
            result for a = {resultA}
        </div>
        <div>
            result for b = {resultB}
        </div>

    </>

};

