import React, { useEffect, useState } from 'react';
import axios from "axios"
import HomeCard from './HomeCard';

function HomeCardManager() {
    const [places, setPlaces] = useState([]);
    const [loading , setLoading] = useState(false);
 
    useEffect(() => {
        setLoading(true);
       axios.get(`https://jalaj-travel-log.herokuapp.com/travel-log/places`).then((places) => {

           setPlaces(places.data);
           setLoading(false);
       }).catch((err) => {
           console.log(err);
       })
    },[])

    return (
    <div className="container row mt-3">
    {loading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="spinner-border text-info"></div> </div>: places.map((place, i) => {
        return (
               <div className="col-md-6 mt-3">
                   <HomeCard key={i}  name={place.name} img={place.mainPhoto} id={place._id} />
               </div>
        )
    })}
  </div>
    )
}

export default HomeCardManager;
