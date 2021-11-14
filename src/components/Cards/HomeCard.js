import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function HomeCard({name, img, id}) {
    return (
      <div className="container">
        <div className="row">
         <div className="cardy">
        <div className="card__image-container">
          <img className="card__image" src={img} alt="Places" style={{height:350, width:'100%', objectFit:'cover'}} />
       </div>
         
         {/* <svg className="card__svg" viewBox="0 0 800 500">
   
           <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
           <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
         </svg>  */}
       
        <div className="card__content row mt-3">
          <h1 className="card__title">{name}</h1>
       <Link to={`/place/${id}`} className="card-btn"><button type="button" className="btn btn-outline-info mt-2" style={{marginLeft:'170px'}}>Experience</button></Link>
       </div>
     </div>
     </div>
      </div>
    )
}

export default HomeCard;
