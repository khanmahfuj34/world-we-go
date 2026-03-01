import React, { use, useState } from 'react';
import Country from './country/country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]=useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries= (country)=>{
        // console.log('handel Visited country clicked',country);
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
    }
    const handleVisitedFlag =(flag)=>{
        const newVisitedFlags=[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    
    return (
        <>
            <h2>Here is the data: {countries.length}</h2>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
           <div className='countries'>
             {
                countries.map(country=><Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}
                ></Country>)
            }
           </div>
        </>
    );
};

export default Countries;