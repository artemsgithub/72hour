import { useState, useEffect } from "react"

const Weather = ({ position }) => {

    const long = position.long
    const lati = position.lat

    const APIKey = '6cf22fd325eac78db9643751d571584f'
    // https://cors-anywhere.herokuapp.com/
    const [weather, setWeather] = useState()

    const initData = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${APIKey}`)
        
        const weatherData = await response.json()
            setWeather(weatherData)


        console.log(weatherData)
        return weather
    }

    useEffect(()=> {
        initData()
    },[])

    let kelvinTemp = weather.main.temp
    let tempInFahrenheit = kelvinTemp * 1.8 - 459.67

    let finalTempResult = Math.trunc(tempInFahrenheit)

    

    return(
        <div>
        <h1> Your current coordinates.</h1> 
        <p> longitude: {long}</p>
        <p> latitude: {lati}</p>
        
        <h1> The weather where you are:</h1>
        <p>Or just go outside. \_(ツ)_/¯ </p>

        <h3>Temp: {finalTempResult} degrees Fahrenheit</h3>

        
        </div>

    )
}

export default Weather