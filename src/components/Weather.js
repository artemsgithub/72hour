import { useState, useEffect } from "react"
import Toggle from './Toggle'

const Weather = ({ position }) => {

    const long = position.long
    const lati = position.lat

    const APIKey = '6cf22fd325eac78db9643751d571584f'
    // https://cors-anywhere.herokuapp.com/
    const [weather, setWeather] = useState()
    const [kelvin, setKelvin]= useState()
    const initData = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${APIKey}`)
        
        const weatherData = await response.json()

        console.log(weatherData)

        let kelvinTemp = await weatherData.main.temp 
        let tempInFahrenheit = kelvinTemp * 1.8 - 459.67
        setWeather(tempInFahrenheit)
        setKelvin(kelvinTemp) 
    }

    useEffect(()=> {
        initData()
    },[])

   return(

        <div>
        <h1> The weather where you are:</h1>
        <p>Or just go outside. \_(ツ)_/¯ </p>
        <Toggle tempF={weather} />
    
        </div>

    )
}

export default Weather