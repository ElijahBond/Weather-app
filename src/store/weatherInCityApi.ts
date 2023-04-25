import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiKey } from './index';

export const weatherInCityApi = createApi({
    reducerPath: 'weatherInCityApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getWeatherInCity: builder.query({
            query: (args) => {
            const {lat, lon} = args;
            return {
                url: `weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            }}
        }),
    }),
})

export const { useGetWeatherInCityQuery } = weatherInCityApi;



// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}