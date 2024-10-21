import React from 'react';
import countriesData from '../data.json';

const Cities = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trending Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countriesData.countries.map((country, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
            <div className="p-4">
            <h2 className="text-xl font-bold mb-2 flex items-center">
                <img src={country.flag} alt={`${country.name} Flag`} style={{ width: '20px', height: 'auto', marginRight: '8px' }} />
                {country.name}
              </h2>              <p className="text-gray-700 mb-2"><strong>Capital:</strong> {country.capital}</p>
              <p className="text-gray-700 mb-4">{country.description}</p>
              <p className="text-gray-700 mb-4"><strong> Popular Destinations: </strong>{country.cities}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
