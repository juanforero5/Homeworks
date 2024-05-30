import React, { useState, useEffect } from 'react';
import GifItem from './GifItem';

const GifGrid = () => {
  const [gifs, setGifs] = useState([]);
  const [category, setSearchTerm] = useState('');

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pF8Oaqk10NJqk8Ksp1OFD2GNDIp1Pm10=${category}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data;
  };

  const fetchGifs = async () => {
    const data = await getGifs();
    console.log(data); // print the list of gifs in the console
    setGifs(data);
  };

  useEffect(() => {
    fetchGifs();
  }, [category]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="gif-grid">
      <div className = "search-container">
        <input type = "text" value={category} onChange={handleInputChange} placeholder = "Ingrese una categoria"/>
      </div>
      <div className="gif-list">
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
