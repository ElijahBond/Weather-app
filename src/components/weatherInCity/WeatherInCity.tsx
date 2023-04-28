import { Divider } from "@mui/material";
import { DeviceThermostat, Air, WbTwilight, GitHub } from '@mui/icons-material';

import { useAppSelector } from "../../store/hooks"

import Clear from '../../assets/Clear.png';
import Clouds from '../../assets/Clouds.png';
import Rain from '../../assets/Rain.png';
import Default from '../../assets/Default.png';

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

    const weatherImage = () => {
        switch (weatherMain) {
            case 'Clear':
                return Clear;
                break;
            case 'Clouds':
                return Clouds;
                break;
            case 'Rain':
                return Rain;
                break;
            default:
                return Default
        } 
    }

    const WeatherView = () => {
        return (
            <div>
                    <div className="weather">
                        <div className="weather__city-and-date">
                            <p>{currentCityName}</p>
                            <p>Today is 27 April 2023</p>
                            
                        </div>
                        <Divider />
                        <div className="main-info">
                            <img className="main-info__img" src={weatherImage()} alt="img" />
                            <div className="main-info__desc">
                                <p>{weatherMain}</p>
                                <p>{weatherDescription}</p>
                            </div>
                        </div>
                        <Divider />

                        <div className="additional-info">
                            <div className="additional-info__temp">
                                <DeviceThermostat />
                                <div>Current: {currentTemp}°C</div>
                                <div>Feels like: {currentTempFeelsLike}°C</div>
                                <div>Min temp: {todayTempMin}°C</div>
                                <div>Max temp: {todayTempMax}°C</div>
                            </div>

                            <Divider orientation="vertical" variant="middle" flexItem />
                            <div className="additional-info__wind">
                                <Air />
                                <div>Wind speed: {todayWindSpeed}m/s</div>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem/>
                            <div className="additional-info__sunset">
                                <WbTwilight />
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
                                <GitHub />
                            </a>
                        </p>
                    </div>
                </div>
        )
    }

    return (
        <div>
            { currentTemp ? <WeatherView /> : null }
        </div>
    )
}