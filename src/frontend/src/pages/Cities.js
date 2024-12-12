import React, { useState, useEffect } from 'react';

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/cities')
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error('Error fetching cities:', error));
  }, []);

  // Function to add city to favorites
  const handleAddToFavorites = async (city) => {
    const favoriteData = {
      name: city.name || "Unknown Name",
      country: city.country || "Unknown Country",
      description: city.description || "No description provided",
    };

    try {
      const response = await fetch('http://localhost:8081/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favoriteData),
      });

      if (response.ok) {
        alert(`${favoriteData.name} added to favorites!`);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        alert(`Failed to add to favorites: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  // Function to handle liking a city
  const handleLikeCity = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/cities/${id}/like`, {
        method: 'PUT',
      });

      if (response.ok) {
        alert('City liked!');
        const updatedCitiesResponse = await fetch('http://localhost:8081/cities');
        const updatedCities = await updatedCitiesResponse.json();
        setCities(updatedCities);        setCities((prevCities) =>
          prevCities.map((city) =>
            city.id === id ? { ...city, likes: (city.likes || 0) + 1 } : city
          )
        );
      } else {
        console.error('Failed to like city:', response.statusText);
      }
    } catch (error) {
      console.error('Error liking city:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trending Cities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div key={city._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{city.name}</h2>
              <p className="text-gray-700 mb-4">{city.description}</p>
              <p className="text-gray-500">Likes: {city.likes || 0}</p>
              <button
                onClick={() => handleAddToFavorites(city)}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Add to Favorites
              </button>
              <button
                onClick={() => handleLikeCity(city._id)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
