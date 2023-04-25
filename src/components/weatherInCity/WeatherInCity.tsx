import { useAppSelector } from "../../store/hooks"
import { useGetWeatherInCityQuery } from "../../store/weatherInCityApi"

export const WeatherInCity = () => {
    const currentCityName = useAppSelector((state) => state.cityInfoReducer.nameOfCity)
    const currentCityCountry = useAppSelector((state) => state.cityInfoReducer.country)
    const currentCityLat = useAppSelector((state) => state.cityInfoReducer.lat)
    const currentCityLon = useAppSelector((state) => state.cityInfoReducer.lon)

    const { data: 
        {
            main: {
                    temp,
                    feels_like
            }
        } 
    } = useGetWeatherInCityQuery({lat: currentCityLat, lon: currentCityLon})

    // console.log(temp)

    // console.log(temp, feels_like)

    return (
        <div>
            <h4>{currentCityName}</h4>
            <h4>Current temperature is: {temp}, feels like {feels_like}</h4>
        </div>
    )
}