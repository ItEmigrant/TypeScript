export type reducerActionType = {
    type: string
}

export type StateTape = {
    collapsed: boolean
}
export const reducerUnAccording = (state: StateTape, action: reducerActionType): StateTape => {

    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed};


        default:
            throw new Error("Bad action type");
    }

}