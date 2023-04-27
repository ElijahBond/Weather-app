import { useState } from 'react';

import { useLazyGetCityCoordinatesByNameQuery } from "../store";
import { setCityCountry, setCityLat, setCityLon, setCityName, setDataInfoInCity } from '../store/cityInfoSlice';
import { useAppDispatch } from '../store/hooks';
import { useLazyGetWeatherInCityQuery } from '../store/weatherInCityApi';

// input city name. After that recieve info and dispatch name, lat, lon in store 

export const InputCity = () => {
    const [localCityName, setLocalCityName ] = useState('');

    const [ getCityCoordinatesTrigger] = useLazyGetCityCoordinatesByNameQuery({})
    const [ getDataInfoInCityTrigger] = useLazyGetWeatherInCityQuery({})

    const dispatch = useAppDispatch();

    const onCityNameHandler = (nameOfCity: string) => {
        setLocalCityName(nameOfCity)
    } 

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        getCityCoordinatesTrigger(localCityName)
            .unwrap()
            .then((data) => (
                dispatch(setCityName(data[0].name)),
                dispatch(setCityCountry(data[0].state)),
                dispatch(setCityLat(data[0].lat)),
                dispatch(setCityLon(data[0].lon)),

                getDataInfoInCityTrigger({lat: data[0].lat, lon: data[0].lon})
            .unwrap()
            .then((data) => (
                dispatch(setDataInfoInCity(data))
            ))
            .catch((error) => console.error('rejected in fetching weather', error))
            ))
        .catch((error) => console.error('rejected in geocoding', error))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <input
                value={localCityName}
                type='text'
                placeholder='Write city'
                onChange={e => onCityNameHandler(e.target.value)}
                />

            <button type='submit'>Search</button>
            </form>
        </div>
    )
}