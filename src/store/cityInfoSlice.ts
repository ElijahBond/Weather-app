import { createSlice } from "@reduxjs/toolkit"
import { IInitialState } from "."


const initialState: IInitialState = {
    nameOfCity: '',
    country: '',
    lat: null,
    lon: null
}

export const cityInfoSlice = createSlice({
    name:'cityInfo',
    initialState,
    reducers: {
        setCityName: (state, action) => {
            state.nameOfCity = action.payload
        },
        setCityCountry: (state, action) => {
            state.country = action.payload
        },
        setCityLat: (state, action) => {
            state.lat = action.payload;
        },
        setCityLon: (state, action) => {
            state.lon = action.payload;
        },
    }
})

export const { 
    setCityName, 
    setCityCountry, 
    setCityLat, 
    setCityLon 
} = cityInfoSlice.actions;

export default cityInfoSlice.reducer;