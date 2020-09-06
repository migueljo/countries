import React, { useState } from 'react';
import Select from 'react-select';
import styles from './DropdownStyles'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        placeholder='Filter by Region'
        styles={styles}
    />
  );
}
