export interface ICityCoordinates {
    name: string,
    lon: number,
    lat: number
}

export interface IInitialState {
    nameOfCity: string,
    country: string,
    lat: number,
    lon: number,
    weatherMain: string,
    weatherDescription: string,
    temp: number,
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    windSpeed: number,
    sunrise: number,
    sunset: number
}