import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './place.css';

function SinglePlace() {
    const [loading, setLoading] = useState(false);
    const {placeId} = useParams();
    const [place, setPlace] = useState([])

    useEffect(() => {
        setLoading(true);
         axios.get(`https://jalaj-travel-log.herokuapp.com/travel-log/place/${placeId}`).then((place) => {
                 setPlace(place.data);
                 setLoading(false);
         }).catch((err) => {
             console.log(err);
         })
    },[placeId]);


    return (
<>
{loading ? <div className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="spinner-border text-info"></div> </div> :
    <div>
<div className='back-img'>
    <img src={place.backPhoto} style={{height:200,width:'100%', objectFit:'cover'}} alt="background" />
</div>
            <div className="container">
                      <div className="row mt-5">
                            <div className="col-md-5 col-xs-12 col-sm-9 mb-3">
                          <img className="m-auto city-image"
                          src={place.mainPhoto} 
                          alt="Place" />
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-9">
                            <h3 className="text-info" style={{fontWeight:700}}>
                              {place.name}
                            </h3>
                            <p className="mt-4" style={{fontWeight:600}}>{place.desc}</p>
                        </div>
                      </div>
                      <div className="footer mb-4">
                      <div className="row">
                      <div className="card text-white  border-info mb-3 m-auto col-md-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-info">Expenses</div>
                        <div className="card-body text-info">
                            <h5 className="card-title">{place.expense} INR</h5>
                        </div>
                  </div>
                  <div className="card text-white border-info mb-3 m-auto col-md-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-info">Trip Type</div>
                        <div className="card-body text-info">
                            <h5 className="card-title">{place.tripType}</h5>
                        </div>
                  </div>
                      </div>
           
        </div>
       </div>
 </div>
}       
  </>
    )
}

export default SinglePlace
