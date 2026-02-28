import React, { use, useState } from 'react';
import Country from './country/country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]=useState([]);
    const handleVisitedCountries= (country)=>{
        console.log('handel Visited country clicked',country);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    
    return (
        <>
            <h2>Here is the data: {countries.length}</h2>
            <h3>Total Country Visited: </h3>
           <div className='countries'>
             {
                countries.map(country=><Country country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
           </div>
        </>
    );
};

export default Countries;