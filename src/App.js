import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Nasa from './components/Nasa'
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
<<<<<<< HEAD
        setLocation({ lat: lat, long: long })
      }
=======
        setLocation({lat: lat, long: long})
        
      } 
>>>>>>> b419fb4f7dc6ea8e578a855d554b5b24c42b215b
      navigator.geolocation.getCurrentPosition(success)

    }, [])

    return location;

  }

<<<<<<< HEAD
  // Gets just the
  const location = useLocation()

  const routes = ['nasa', 'openweather', 'zomato']
=======
function App() {

 const location = useLocation()
    

  const routes = ['NASA','OPENWEATHER','ZOMATO']
>>>>>>> b419fb4f7dc6ea8e578a855d554b5b24c42b215b

  return (
    <div className="App">

<<<<<<< HEAD
      {/* Establish Navigation for the website */}
      <Navbar routes={routes} />
      <Route exact path="/nasa"></Route>
=======
    {/* Establish Navigation for the website */}
>>>>>>> b419fb4f7dc6ea8e578a855d554b5b24c42b215b

    <p>Your current position.</p>
        <p>{location.lat}</p>  
        <p>{location.long}</p>  


      <Navbar routes={routes} />
      <Route exact path="/nasa">
        <Nasa position={location} />
      </Route>
            
      <Route exact path="/openweather">
        <Weather position={location} />
      </Route>

<<<<<<< HEAD
      <Route exact path="/Zomato">
        <Zomato lat={latitude} lon={longitude} />
=======
      <Route exact path="/zomato">
        <Food position ={location} />
>>>>>>> b419fb4f7dc6ea8e578a855d554b5b24c42b215b
      </Route>

    </div>
  );
}

// Makes our Component available for import
export default App;