import React from 'react';
import destinationsData from '../destinations.json';
import countryData from '../data.json';

const Home = () => {

  return <div>
      {welcome()}
      {renderDestinations()}


  </div>;
};



const welcome = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Travel Buddy, check out our top picks!</h1>
    </div>
  );
}


const renderCountriesandCities=()=>{

}



const renderDestinations = () => {
    // Extract a sample city and country data from destinations
    const destinationsArray = destinationsData.destinations;
    const countryArray = countryData.countries;
    const randomIndex = Math.floor(Math.random() * destinationsArray.length);
    const randomIndex1 = Math.floor(Math.random() * countryArray.length);  
    console.log(randomIndex);
    const sampleCity = destinationsData.destinations[randomIndex]; // Assuming the first destination is a city
    const sampleCountry = countryData.countries[randomIndex1]; // Assuming the first country is used
  
    return (
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
        className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden w-full h-64"
        onClick={() => window.location.href = "/cities"}
        >
        <img 
          src={sampleCity.image} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Cities</h2>
        </div>
        </button>
      
        <button 
        className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden w-full h-64"
        onClick={() =>  window.location.href = "/countries"}
        >
        <img 
          src={sampleCountry.image} 
          alt="Country Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Countries</h2>
        </div>
        </button>
      </div>
      </div>
    );
  };
  

export default Home;
