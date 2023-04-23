import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { geocodingApi } from "./geocodingApi";

const apiKey = 'f0a17b7960c59b15f23a9397b5b32d24';

const store = configureStore({
    reducer: {
        [geocodingApi.reducerPath]: geocodingApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geocodingApi.middleware),
})


export { 
    store,
    apiKey,
}