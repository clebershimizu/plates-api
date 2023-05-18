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
    <form onSubmit={handleSubmit}>
      <label htmlFor="plateNumber">Plate Number:</label>
      <input
        type="text"
        id="plateNumber"
        name="plateNumber"
        value={plateNumber}
        onChange={(event) => setPlateNumber(event.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
