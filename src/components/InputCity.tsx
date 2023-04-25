import { useState } from 'react';

import { store, useGetCityCoordinatesByNameQuery } from "../store";
import { setCityCountry, setCityLat, setCityLon, setCityName } from '../store/cityInfoSlice';
import { useAppDispatch } from '../store/hooks';

// input city name. After that recieve info and dispatch name, lat, lon in store 

export const InputCity = () => {
    const [localCityName, setLocalCityName ] = useState('');
    const { data } = useGetCityCoordinatesByNameQuery(localCityName);

    const dispatch = useAppDispatch();

    

    const onCityNameHandler = (nameOfCity: string) => {
        setLocalCityName(nameOfCity)
    } 

    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        dispatch(setCityName(data[0].name))
        dispatch(setCityCountry(data[0].state))
        dispatch(setCityLat(data[0].lat))
        dispatch(setCityLon(data[0].lon))
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