import { Divider } from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useAppSelector } from "../../store/hooks"

import sunny from '../../assets/sunny.png'

import './WeatherInCity.scss';

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


            <div className="weather">
                <div className="weather__city-and-date">
                    <p>London</p>
                    <p>Today is 27 April 2023</p>
                    
                </div>
                <Divider />
                <div className="main-info">
                    <img className="main-info__img" src={sunny} alt="img" />
                    <div className="main-info__desc">
                        <p>Sunny</p>
                        <p>Clear sky</p>
                    </div>
                </div>
                <Divider />

                <div className="additional-info">
                    <div className="additional-info__temp">
                        <DeviceThermostatIcon />
                        <div>Current: currTemp °C</div>
                        <div>Feels like: temp °C</div>
                        <div>Min temp: mt °C</div>
                        <div>Max temp: mt °C</div>
                    </div>

                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="additional-info__wind">
                        <AirIcon />
                        <div>Wind speed: 1 m/s</div>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <div className="additional-info__sunset">
                        <WbTwilightIcon />
                        <div>Dawn: 8.00 am</div>
                        <div>Sunset: 21.00 am</div>
                    </div>
                </div>
                <Divider />
                <p className="gh">
                    <a 
                        href="https://github.com/ElijahBond/Weather-app" 
                        target="_blank"
                        title="ElijahBond gh"
                        
                    >
                        <GitHubIcon />
                    </a>
                </p>
            </div>
        </div>
    )
}