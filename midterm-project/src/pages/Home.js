import React from 'react';
import destinationsData from '../destinations.json';
const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Top Travel Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinationsData.destinations.map((destination, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{destination.name}, {destination.country}</h2>
              <p className="text-gray-700 mb-4">{destination.description}</p>
              <h3 className="text-lg font-semibold">Top Attractions:</h3>
              <ul className="list-disc list-inside">
                {destination.attractions.map((attraction, i) => (
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

export default Home;
