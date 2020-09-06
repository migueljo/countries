import React, { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

import Header from './components/Header'
import SearchBox from './components/SearchBox';
import Dropdown from './components/Dropdown';

import {getCountries} from './data/APIInterface'

import GlobalStyles from './GlobalStyles'
import Countries from './components/Countries/Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    const cachedCountries = localStorage.getItem('countries')

    if (cachedCountries) {
      const allCountries = JSON.parse(cachedCountries)
      setCountries(allCountries)
      setAllCountries(allCountries)
    } else {
      getCountries().then(countries => {
        localStorage.setItem('countries', JSON.stringify(countries))
        setCountries(countries)
        setAllCountries(countries)
      })
    }

  }, [])

  const debounceF = debounce((event) => {
    const value = event.target.value

    if (value.length === 0) {
      setCountries(allCountries)
      return
    }

    const filteredCountries = allCountries.filter(country => {
      return country.name.toLowerCase().includes(value.toLowerCase())
    })
    setCountries(filteredCountries)
  }, 300)

  const handleSearchChange = useCallback((event) => {
    event.persist()
    debounceF(event);
  }, [debounceF])

  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{ width: '100%', maxWidth: '90%', margin: 'auto' }}>
        <div style={{ margin: '30px 0 40px' }}>
          <SearchBox onChange={handleSearchChange} />
        </div>
        <div style={{ width: '200px', margin: '30px 0 40px' }}>
          <Dropdown />
        </div>
        <Countries countries={countries} />
      </div>
    </>
  );
}

export default App;
