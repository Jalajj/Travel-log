import React, { useState } from 'react';
import FileBase from "react-file-base64";
import axios from "axios";

function Form() {
const [cityData, setCityData] = useState({
name: "",
description: "",
image: "",
backImage: "",
expense: 0,
tripType: ""
});

const handlePost = async () => {
    try{
     const posted =  await axios.post('https://jalaj-travel-log.herokuapp.com/travel-log/create/place',{
            name: cityData.name,
            desc: cityData.description,
            mainPhoto: cityData.image,
            backPhoto: cityData.backImage,
            expense: cityData.expense,
            tripType:cityData.tripType
        });
        if(posted){
          window.alert(posted);
        }
    }
   catch(err){
       console.log(err)
   }
}

    return (

        <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                        <input className="form-control" type="text" placeholder="Name" onChange={(e) => setCityData({ ...cityData, name: e.target.value })} /> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <div className="input-group"><textarea onChange={(e) => setCityData({ ...cityData, description: e.target.value })}  rows='7' className="form-control" type="text" placeholder="Description" /> </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <div className="input-group"> 
                            <input className="form-contro m-1" onChange={(e) => setCityData({ ...cityData, expense: e.target.value })}  type="Number" placeholder="expenses" /> 
                            <input className="form-control m-1" type="text" placeholder="Trip type" onChange={(e) => setCityData({ ...cityData, tripType: e.target.value })}  /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <div className="input-group">
                            <label className="mr-3" style={{fontWeight:700}}>Main image</label>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setCityData({ ...cityData, image: base64 })} />
                            <label className="mr-3" style={{fontWeight:700}}>Background image</label>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setCityData({ ...cityData, backImage: base64 })} />
                             </div>
                        </div>
                    </div>
                </div>
           
                  <button className="btn btn-primary btn-block confirm-button" onClick={handlePost}>Confirm</button>
            </div>
        </div>
    </div>
    )
}

export default Form;
