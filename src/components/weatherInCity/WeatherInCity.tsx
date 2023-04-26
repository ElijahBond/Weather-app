import { useAppSelector } from "../../store/hooks"

export const WeatherInCity = () => {
    const currentCityName = useAppSelector((state) => state.cityInfoReducer.nameOfCity)

    const currentTemp = useAppSelector(state => state.cityInfoReducer.temp)
    const currentTempFeelsLike = useAppSelector(state => state.cityInfoReducer.feelsLike)
    const todayTempMin = useAppSelector(state => state.cityInfoReducer.tempMin)
    const todayTempMax = useAppSelector(state => state.cityInfoReducer.tempMax)

    const todayWindSpeed = useAppSelector(state => state.cityInfoReducer.windSpeed)

    const weatherMain = useAppSelector(state => state.cityInfoReducer.weatherMain)
    const weatherDescription = useAppSelector(state => state.cityInfoReducer.weatherDescription)

    return (
        <div>
            { currentTemp ? (
                <div>
                    <h4>You are looking: {currentCityName}</h4>
                    <h4>Current weather is: {weatherMain}, {weatherDescription}</h4>
                    <h4>Current temperature is: {currentTemp}, feels like {currentTempFeelsLike}</h4>
                    <h4>Today min temp: {todayTempMin}, today temp max: {todayTempMax}</h4>
                    <h4>Wind speed: {todayWindSpeed}</h4>
                </div>
            )
            : null
            }
        </div>
    )
}