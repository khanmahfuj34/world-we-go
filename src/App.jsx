
import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries'
import Country from './component/country/country';


const countriesPromise=fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json());


function App() {
  

  return (
    <>
      
      <Suspense fallback={<p>Data Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      <Country></Country>
     
    </>
  )
}

export default App
