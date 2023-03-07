import React, {useCallback, useState} from "react";

export const LikeUseCallback = () => {
    console.log(":)")

    const [counter, setCounter] = useState(0);
    const [Books, setBooks] = useState(["React", "Js", "CSS"]);


    /*const memorizedAdBook1 = useMemo(()=>{
        return () => {
            setBooks([...Books, "C++" + new Date().getDate()])
        }}, [Books]);*/

    const memorizedAdBook = useCallback(()=>{
            setBooks([...Books, "C++" + new Date().getDate()])
        }, [Books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memorizedAdBook}/>
    </>

}

type BooksXXProps = {
    addBook: () => void
}

const BooksXX = (props: BooksXXProps) => {
    console.log("Books secret")

    return <div>
        <button onClick={props.addBook}>addBook</button>
        {

        }
    </div>
}

export const Book = React.memo(BooksXX);
