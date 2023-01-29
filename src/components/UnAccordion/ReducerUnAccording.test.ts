import {reducerUnAccording, StateTape} from "./ReducerUnAccording";


test("reducer test", () => {

    const state: StateTape = {collapsed: false}
    const newState = reducerUnAccording(state, {type: "TOGGLE-COLLAPSED"});


    expect(newState.collapsed).toBe(true);
    expect(state.collapsed).toBe(false)


})