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
    
      
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Busque placas - Jabes
        </h1>
        <div className="flex justify-center m-6">
          <SearchForm onSearch={searchPlates} />
        </div>
        <div>
          {searchResults.length === 0 ? (
            <p>Nenhuma placa encontrada.</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-2">Número da placa</th>
                  <th className="py-2">Marca</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Ano</th>
                  <th className="py-2">Estado</th>
                  <th className="py-2">Cidade</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((plate) => (
                  <tr
                    key={plate.id}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handlePlateClick(plate.plateNumber)}
                  >
                    <td className="py-2">{plate.plateNumber}</td>
                    <td className="py-2">{plate.brand}</td>
                    <td className="py-2">{plate.model}</td>
                    <td className="py-2">{plate.year}</td>
                    <td className="py-2">{plate.state}</td>
                    <td className="py-2">{plate.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {selectedPlate && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Produtos disponíveis</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-2">Produto</th>
                </tr>
              </thead>
              <tbody>
                {selectedPlate.products.map((product) => (
                  <tr key={product}>
                    <td className="py-2">{product}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
        
      </div>
    

        
);
};

export default Home;