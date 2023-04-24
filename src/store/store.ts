import { configureStore } from "@reduxjs/toolkit";
import { geocodingApi } from "./geocodingApi";
import { cityInfoSlice } from "./cityInfoSlice";

export const store = configureStore({
    reducer: {
        [geocodingApi.reducerPath]: geocodingApi.reducer,
        cityInfoReducer: cityInfoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geocodingApi.middleware),
});