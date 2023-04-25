import { configureStore } from "@reduxjs/toolkit";
import { geocodingApi } from "./geocodingApi";
import { cityInfoSlice } from "./cityInfoSlice";
import { weatherInCityApi } from "./weatherInCityApi";

export const store = configureStore({
    reducer: {
        [geocodingApi.reducerPath]: geocodingApi.reducer,
        [weatherInCityApi.reducerPath]: weatherInCityApi.reducer,
        cityInfoReducer: cityInfoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geocodingApi.middleware, weatherInCityApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;