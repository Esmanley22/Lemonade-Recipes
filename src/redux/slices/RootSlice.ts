import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        color: "Color",
        num_of_lemons: 'Num_Of_Lemons',
        time_to_make: "Time_To_Make",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseColor: (state, action) => { state.color = action.payload }, // All we're doing is setting the input to the state.name
        chooseNum_Of_Lemons: (state, action) => { state.num_of_lemons = action.payload },
        chooseTime_To_Make: (state, action) => { state.time_to_make = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseColor, chooseNum_Of_Lemons, chooseTime_To_Make } = rootSlice.actions
