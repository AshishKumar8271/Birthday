import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/userSlice.jsx";
import chatSlice from "./Features/chatSlice.jsx";


const store = configureStore( {
    reducer: {
        birthdaySlice:userSlice,
        chat: chatSlice,
    }
});


export default store;