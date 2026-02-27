import React from 'react';
import './country.css'

const Country = ({country}) => {
    console.log(country)
    const handelVisited = ()=>{
        console.log('btn clicked')
    }
    return (
        <div className='country'>
            <img src={country?.flags?.flags.png} alt="" />
            <h3>Name: {country?.name?.common}</h3>
            <p>Population: {country?.population?.population}</p>
            <p>Area: {country?.area?.area} {country?.area?.area > 30000 ? "Big Country" : "small Country"}</p>
            <button onClick={handelVisited}>Not Visited</button>
        </div>
    );
};

export default Country;