import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from the backend
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('http://localhost:8081/favorites');
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (id) => {
    try {
      await fetch(`http://localhost:8081/favorites/${id}`, {
        method: 'DELETE',
      });
      setFavorites(favorites.filter((favorite) => favorite.id !== id));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={favorite.image} alt={favorite.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{favorite.name}</h2>
              <p className="text-gray-700 mb-4">{favorite.description}</p>
              <button
                onClick={() => handleRemoveFavorite(favorite.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
