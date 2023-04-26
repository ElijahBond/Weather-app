import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiKey } from './index';

export const geocodingApi = createApi({
    reducerPath: 'geocodingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/geo/1.0/'}),
    endpoints: (builder) => ({
        getCityCoordinatesByName: builder.query({
            query: (name) => `direct?q=${name}&limit=1&appid=${apiKey}`,
        }),
    }),
})

export const { 
    useGetCityCoordinatesByNameQuery, 
    useLazyGetCityCoordinatesByNameQuery 
} = geocodingApi;


// 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}'