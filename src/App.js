import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'

import './App.css'; 
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Nasa from './components/Nasa'

// Defining our <App /> component the function name matches the file name

 const useLocation = () => {
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

    return location;

}


function App() {

 const location = useLocation()
    

  const routes = ['nasa','openweather','zomato']

  return ( 
    <div className="App"> 

    {/* Establish Navigation for the website */}
      <Navbar routes={routes} />
      <Route exact path="/nasa"></Route>

      <Route exact path="/openweather">
        <Weather position={location} />
      </Route>

      <Route exact path="/zomato"></Route>

    </div>
  );
}

// Makes our Component available for import
export default App;