import { createSlice } from "@reduxjs/toolkit"
import { IInitialState } from "."

const initialState: IInitialState = {
    nameOfCity: '',
    country: '',
    lat: 0,
    lon: 0,
    weatherMain: '',
    weatherDescription: '',
    temp: 0,
    feelsLike: 0,
    tempMin: 0,
    tempMax: 0,
    windSpeed: 0,
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
        setDataInfoInCity: (state, action) => {
            state.weatherMain = action.payload.weather[0].main
            state.weatherDescription = action.payload.weather[0].description
            state.temp = action.payload.main.temp
            state.feelsLike = action.payload.main.feels_like
            state.tempMin = action.payload.main.temp_min
            state.tempMax = action.payload.main.temp_max
            state.windSpeed = action.payload.wind.speed
        }
    }
})

export const { 
    setCityName, 
    setCityCountry, 
    setCityLat, 
    setCityLon,
    setDataInfoInCity
} = cityInfoSlice.actions;

export default cityInfoSlice.reducer;