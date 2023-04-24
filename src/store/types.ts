export interface ICityCoordinates {
    name: string,
    lon: number,
    lat: number
}

export interface IInitialState {
    nameOfCity: string,
    country: string,
    lat: null | number,
    lon: null | number
}