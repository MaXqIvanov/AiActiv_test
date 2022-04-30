import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";

const rootReducer = combineReducers({
    messages: messageSlice,
})

export const store = configureStore({
    reducer: rootReducer
})