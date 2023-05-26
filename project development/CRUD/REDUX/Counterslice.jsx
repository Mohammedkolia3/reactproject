import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "mohammed"
    },
    reducers: {
        increment: (state, action) => {
            state.number = state.number + Number(action.payload)
        },
        decrement: (state, action) => {
            state.number = state.number - 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions;

// always export reducer 
export default counterSlice.reducer