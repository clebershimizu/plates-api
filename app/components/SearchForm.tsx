import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (plateNumber: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [plateNumber, setPlateNumber] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(plateNumber);
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label htmlFor="plateNumber" className="block text-gray-700 text-sm font-bold mb-2">
          Insira a placa:
        </label>
        <input
          type="text"
          id="plateNumber"
          name="plateNumber"
          placeholder="AAA0000 ou AAA0A00"
          value={plateNumber}
          onChange={(event) => setPlateNumber(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        
      </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Buscar</button>
      </form>
    </div>
  );
};

export default SearchForm;

