import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Nasa from './components/Nasa'
import Food from './components/Zomato'
import Header from './components/Header'
import Zomato from './components/Zomato'

// Defining our <App /> component the function name matches the file name

function App() {
  const useLocation = () => {
    const [location, setLocation] = useState({ lat: 0, long: 0 })

    useEffect(() => {
      const success = (position) => {
        let lat = position.coords.latitude
        let long = position.coords.longitude

        console.log(lat, long)
        setLocation({ lat: lat, long: long })
      }
      navigator.geolocation.getCurrentPosition(success)

    }, [])

function App() {

  // Gets just the
  const location = useLocation()

  const routes = ['nasa', 'openweather', 'zomato']

  return (
    <div className="App">

      {/* Establish Navigation for the website */}
      <Navbar routes={routes} />
      <Route exact path="/nasa"></Route>

 
      <Header/>
      <Navbar routes={routes} />

      <Route exact path="/nasa"></Route>
      <div className="user-message">
    <div style={{display:'flex'}}>
      <p style={{marginRight:"10px", marginLeft:"10px"}}>Please allow your coordinates to load before proceeding!   </p>
      <p><strong>Your current position : </strong>  </p>
        <p> {location.lat},</p>  
        <p> {location.long} </p>  
        </div>
        </div>
      <Route exact path="/openweather">
        <Weather position={location} />
      </Route>

      <Route exact path="/Zomato">
        <Zomato lat={latitude} lon={longitude} />
      </Route>

    </div>
  );
}

// Makes our Component available for import
export default App;