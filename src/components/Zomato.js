import React, { useState, useEffect } from 'react';
import './Zomato.css'
const Zomato = ({ position }) => {

    const long = position.long
    const lati = position.lat
    // const Zomato = (props) => {

    //     const initData = useCallBack(() => {
    //         const latInt = Math.trunc(props.lat);
    //         const lonInt = Math.trunc(props.lon);
    //     })
    // const zomatoUrl1 = 'https://developers.zomato.com/api/v2.1/geocode?lat=42&lon=4'
    // const key = "c39bc77e2a164a290496ad9daa292ef8"
    // const zomatoUrl = `https://developers.zomato.com/api/v2.1/geocode?lat${lati}=&lon=${long}&apikey=${key}`
    // const zomatoUrl1 = `https://developers.zomato.com/api/v2.1/search?lat=${lati}&lon=${long}&apikey=${key}`
    // console.log(zomatoUrl);

    // fetch(zomatoUrl1)
    //     .then(result => result.json())
    //     .then(json => {
    //         console.log(json.restaurants);
    //         displayRestaurant(json);

    //     })
    // function displayRestaurant(json) {

    //     if (json.length === 0) {
    //         console.log("No Results");
    //         let restaurant = "null";
    //     } else {

    //         const restaurant = json[restaurant.r.name];
    //         console.log(restaurant);
            
    //         // let type = json["nearby_restaurants".cusine];
    //         // console.log(type);
    //     }
    // }

    const key = "c39bc77e2a164a290496ad9daa292ef8"
    // https://cors-anywhere.herokuapp.com/
    const [zomato, setZomato] = useState()

    const initData = async () => {
        const response = await fetch(`https://developers.zomato.com/api/v2.1/geocode?lat${lati}=&lon=${long}&apikey=${key}`)
        
        const ZomatoData = await response.json()

        console.log(ZomatoData)
        let restaurant = await ZomatoData.nearby_restaurants[0].restaurant.name
        console.log(restaurant);
        setZomato(restaurant)
    }

    useEffect(()=> {
        initData()
    },[])

    return (
        <div className="restaurantTile">
            <h1> Dining Near Here </h1>
            <p>{zomato}</p>
        </div>

    );
};


export default Zomato;