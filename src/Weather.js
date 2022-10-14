import React, {useEffect, useState} from "react";
import './Weather.css'

const Weather = () => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://proxy.cors.sh/http://api.weatherapi.com/v1/current.json?key=39b229ce72ef40b49d2214506221310&q=Stockholm&aqi=no')
            const data = await response.json()
            console.log(data);
            setWeather(data);
        }
        fetchData();
    }, []);

    return (
        <div className='olofWeather'>
            <p>Live Olof Weather!!!!!</p>
            <img className='icon' src={ weather.current  ? weather.current.condition.icon : '' } />
            <p className='temp'>{ weather.current ? `${weather.current.temp_c}°C` : ''}</p>
            <p className='temp'>{ weather.current ? `${weather.current.temp_f}°F` : ''}</p>
        </div>
    );
}

export default Weather;