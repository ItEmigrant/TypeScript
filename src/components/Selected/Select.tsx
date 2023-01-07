import React, {KeyboardEvent, useEffect, useState} from 'react';
import styles from "./Select.module.css"

export type SelectPropsType = {
    name: string
    onChange: (value: any) => void
    items: ItemType[]
    value: number
}

export type ItemType = {
    title: string
    value: any
}
export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(props.value)

    useEffect(() => {
        setHovered(props.value);
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hovered)


    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {

                    const nextElement = event.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.value);

                        return;
                    }
                }
            }

        }
        if (event.key === "Enter" || event.key === "Escape") {
            setActive(false)
        }
    }

    const changeActive = () => {
        setActive(!active)

    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        changeActive()
    }

    return (
        <>
            <br/>
            <div>
                <select>
                    <option value={''}>Alisa</option>
                    <option value={''}>Bogdan</option>
                    <option value={''}>Artur</option>
                    <option value={''}>Luda</option>
                </select>
            </div>
            < br/>

            {props.name}
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={changeActive}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div

                            onMouseEnter={() => {
                                setHovered(i.value)
                            }}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}>{i.title}
                        </div>)}

                    </div>
                }
            </div>

        </>
    );
};


