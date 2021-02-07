import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'

import './App.css'; 
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Food from './components/Zomato'

// Defining our <App /> component the function name matches the file name
function App() {

    const [location, setLocation] = useState({lat: 0, long: 0})

    useEffect(()=>{
      const success = (position) =>{ 
        let lat = position.coords.latitude
        let long = position.coords.longitude
   
        
        console.log(lat, long)
        setLocation({lat: lat, long: long})
        
      }
      navigator.geolocation.getCurrentPosition(success)
      
    },[])



  const routes = ['nasa','openweather','zomato']

  return ( 
    <div className="App"> 

    {/* Establish Navigation for the website */}
      <Navbar routes={routes} />
      <Route exact path="/nasa"></Route>

      <Route exact path="/openweather">
        <Weather position={location} />
      </Route>

      <Route exact path="/zomato">
        <Food position ={location} />
      </Route>

    </div>
  );
}

// Makes our Component available for import
export default App;