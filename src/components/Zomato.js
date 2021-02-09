import React, { useState, useEffect } from 'react';


const Zomato = (props) => {

    const initData = useCallBack(() => {
        const latInt = Math.trunc(props.lat);
        const lonInt = Math.trunc(props.lon);
    })
    // const zomatoUrl1 = 'https://developers.zomato.com/api/v2.1/geocode?lat=42&lon=4'
    const key = "c39bc77e2a164a290496ad9daa292ef8"
    const zomatoUrl = `https://developers.zomato.com/api/v2.1/geocode?lat${latInt}=&lon=${lonInt}&apikey=${key}`

    fetch(zomatoUrl)
        .then(result => result.json())
        .then(json => {
            console.log(json.nearby_restaurant[1]);
            displayRestaurant(json);
            displayCatagory(json);
        })
    function displayRestaurant(json) {

        if (json.length === 0) {
            console.log("No Results");
            let restaurant = "null";
        } else {

            let restaurant = json[nearby_restaurant.name];
            console.log(restaurant);
            let type = json[nearby_restaurant.cusine];
            console.log(type);
        }
    }

    return (
        <div className="restaurantTile">
            <h1> ZOMATO </h1>
        </div>

    );
};


export default Zomato;