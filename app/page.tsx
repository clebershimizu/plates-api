'use client'
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import platesData from './data/plates';

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Plate[]>([]);
  const [selectedPlate, setSelectedPlate] = useState<Plate | null>(null);

  const searchPlates = (plateNumber: string) => {
    setSearchResults([]);
    const filteredPlates = platesData.filter((plate) =>
      plate.plateNumber.includes(plateNumber)
    );
    setSearchResults(filteredPlates);
    setSelectedPlate(null);
  };

  const handlePlateClick = (plateNumber: string) => {
    const plate = searchResults.find((plate) => plate.plateNumber === plateNumber);
    if (plate) {
      setSelectedPlate(plate);
    }
  };

  return (
    <div>
      <h1>Plates API</h1>
      <SearchForm onSearch={searchPlates} />
      <div>
        {searchResults.length === 0 ? (
          <p>No plates found.</p>
        ) : (
          searchResults.map((plate) => (
            <div key={plate.id} onClick={() => handlePlateClick(plate.plateNumber)}>
              <p>Plate Number: {plate.plateNumber}</p>
              <p>Brand: {plate.brand}</p>
              <p>Model: {plate.model}</p>
              <p>Year: {plate.year}</p>
              <p>State: {plate.state}</p>
              <p>City: {plate.city}</p>
              <hr />
            </div>
          ))
        )}
      </div>
      {selectedPlate && (
        <div>
          <h2>Available Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {selectedPlate.products.map((product) => (
                <tr key={product}>
                  <td>{product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
