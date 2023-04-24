import { useState } from 'react';

import { useGetCityCoordinatesByNameQuery } from "../store";


export const InputCity = () => {
    // const [cityName, setCityName ] = useState('');
    // const { data, isLoading} = useGetCityCoordinatesByNameQuery(cityName);
    // console.log(cityName);

    // const onCityNameHandler = (nameOfCity: string) => {
    //     setCityName(nameOfCity)
    // } 

    return (
        <div>
            <input
                value={cityName}
                type='text'
                placeholder='Write city'
                onChange={e => onCityNameHandler(e.target.value)} />
            <button onClick={() => console.log(data)}>Search</button>
        </div>
    )
}