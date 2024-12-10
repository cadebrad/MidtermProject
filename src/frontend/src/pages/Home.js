import React, { useState, useEffect } from 'react';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch destinations and countries when the component mounts
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:8081/cities');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:8081/countries');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchDestinations();
    fetchCountries();
  }, []);

  const renderDestinations = () => {
    if (!destinations.length || !countries.length) {
      return <p>Loading data...</p>;
    }

    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomIndex1 = Math.floor(Math.random() * countries.length);
    const sampleCity = destinations[randomIndex];
    const sampleCountry = countries[randomIndex1];

    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden w-full h-64"
            onClick={() => window.location.href = "/cities"}
          >
            <img
              src={sampleCity.image || '/default-city.jpg'}
              alt="City Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Cities</h2>
            </div>
          </button>
          <button
            className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden w-full h-64"
            onClick={() => window.location.href = "/countries"}
          >
            <img
              src={sampleCountry.image || '/default-country.jpg'}
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

  return (
    <div>
      {welcome()}
      {renderDestinations()}
    </div>
  );
};

const welcome = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Travel Buddy, check out our top picks!</h1>
    </div>
  );
};

export default Home;
