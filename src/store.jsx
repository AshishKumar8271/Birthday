import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/userSlice.jsx";


const store = configureStore( {
    reducer: {
        birthdaySlice:userSlice,
    }
});


export default store;