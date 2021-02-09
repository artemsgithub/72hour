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

        console.log(weatherData)

        let kelvinTemp = await weatherData.main.temp 
        let tempInFahrenheit = kelvinTemp * 1.8 - 459.67
        setWeather(tempInFahrenheit)
    }

    useEffect(()=> {
        initData()
    },[])


    

    return(
        <div>
   
        <h1> The weather where you are:</h1>
        <p>Or just go outside. \_(ツ)_/¯ </p>

        <h3>Temp: {weather} degrees Fahrenheit</h3>
        <button>Fahrenheit Kelvin Toggle</button>

        
        </div>

    )
}

export default Weather