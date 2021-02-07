import { Route } from 'react-router-dom'

import './App.css'; 
import Navbar from './components/Navbar'


// Defining our <App /> component the function name matches the file name
function App() {

  const routes = ['nasa','openweather','zomato']

  return ( 
    <div className="App"> 

    {/* Establish Navigation for the website */}
      <Navbar routes={routes} />
      <Route exact path="/nasa"></Route>
      <Route exact path="/openweather"></Route>
      <Route exact path="/zomato"></Route>

     {/* Intro text  */}
      <h1>What's going on?</h1>
      <p>Check out a satelite of where you're at, the weather, and a restaurants near you!</p>
      
    </div>
  );
}

// Makes our Component available for import
export default App;