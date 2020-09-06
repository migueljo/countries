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
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

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

  const debouncedHandleSearchChange = debounce((event) => {
    const search = event.target.value
    setSearch(search)

    const filteredCountries = filterCountries(allCountries, [
      country => filterBySearch(country, search),
      country => filterByRegion(country, region.value),
    ])
    setCountries(filteredCountries)
  }, 300)

  const handleSearchChange = useCallback((event) => {
    event.persist()
    debouncedHandleSearchChange(event);
  }, [debouncedHandleSearchChange])

  const handleRegionChange = useCallback((region) => {
    setRegion(region)
    const filteredCountries = filterCountries(allCountries, [
      country => filterBySearch(country, search),
      country => filterByRegion(country, region.value),
    ])
    setCountries(filteredCountries)
  }, [allCountries, search])

  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{ width: '100%', maxWidth: '90%', margin: 'auto' }}>
        <div style={{ margin: '30px 0 40px' }}>
          <SearchBox onChange={handleSearchChange} />
        </div>
        <div style={{ width: '200px', margin: '30px 0 40px' }}>
          <Dropdown onChange={handleRegionChange} />
        </div>
        <Countries countries={countries} />
      </div>
    </>
  );
}

export default App;

function filterCountries(allCountries, filters = []) {
  let result = allCountries
  for (const filter of filters) {
    result = result.filter(filter)
  }
  return result
}

function filterBySearch(country, search) {
  return country.name.toLowerCase().includes(search.toLowerCase())
}

function filterByRegion(country, region) {
  return country.region.toLowerCase().includes(region.toLowerCase())
}
