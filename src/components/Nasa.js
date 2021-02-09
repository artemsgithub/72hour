import { useState, useEffect } from "react";

const Nasa = ({ position }) => {

    const long = position.long;
    const lati = position.lat;

    const APIKey = 'fYhpreE8TxXGJbgr76fBnVRYTSd41i1IkFrn7doB';
    // https://cors-anywhere.herokuapp.com/
    const [nasa, setNasa] = useState();

    const initData = async () => {
        const response = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lat=${lati}&lon=${long}&api_key=${APIKey}&date=2018-06-01&dim=0.1`, {
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Status': 'OK',
            }
      
        });
        
        const nasaData = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(nasaData); 
        reader.onloadend = function() {
            const base64data = reader.result; 
            setNasa(base64data);
        }
    }

    useEffect(() => {
        initData();
    },[]);

    return (
        <div>
            <img src={nasa} alt="satellite" />
        </div>

    );
};

export default Nasa;