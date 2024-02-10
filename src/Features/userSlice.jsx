import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    pageValue:false,
}

const userSlice = createSlice( {
    name:"birthdaySlice",
    initialState:initialState,

    reducers: {
        openPage: (state) => {
            state.pageValue = true;
        }
    }
});


export const {openPage} = userSlice.actions;

export default userSlice.reducer;