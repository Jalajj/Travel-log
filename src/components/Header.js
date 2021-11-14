import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
      
    return (
     <div className="container-fluid">
        <div className='p-3 mt-3 row' style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'}}>
            <div className="col-md-11 m-auto">
            <h2 className="text-info m-auto header-title" style={{fontWeight:800, color:'rgb(30, 166, 190)'}}>JALAJ'S TRAVEL DIARIES</h2>
            </div>
            <div className="col-md-1 m-auto">
           <Link to='/create-place' className="btn-container"><button className="btn btn-info m-auto header-btn" style={{fontWeight:800}}>Create</button></Link>
            </div>
         </div>
        </div>
    )
}

export default Header
