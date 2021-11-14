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
    <div className="container" style={{marginTop:'4%'}}>
    {loading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="spinner-border text-info"></div> </div>: places.map((place, i) => {
        return (
            <div key={i} className="row">
               <div className="col-md-6 col-sm-12">
                   <HomeCard name={place.name} img={place.mainPhoto} id={place._id} />
               </div>
            </div>
        )
    })}
  </div>
    )
}

export default HomeCardManager;
