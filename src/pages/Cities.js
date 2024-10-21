import React from 'react';
import citiesData from '../cities.json';

const Cities = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">City Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {citiesData.cities.map((city, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{city.name}, {city.country}</h2>
              <p className="text-gray-700 mb-2">{city.description}</p>
              <p className="text-gray-700 mb-4"><strong>Main Attractions:</strong></p>
              <ul className="list-disc list-inside">
                {city.attractions.map((attraction, i) => (
                  <li key={i} className="text-gray-600">{attraction}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
