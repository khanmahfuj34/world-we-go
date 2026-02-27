import React, { use } from 'react';
import Country from './country/country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    
    return (
        <div className='countries'>
            <h2>Here is the data: {countries.length}</h2>
            {
                countries.map(country=><Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;