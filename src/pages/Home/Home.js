import React, { useState, useEffect, useCallback, useContext } from 'react'
import debounce from 'lodash.debounce'

import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Dropdown from '../../components/Dropdown'
import Countries from '../../components/Countries'
import Loader from '../../components/Loader'

import {getCountries} from '../../data/APIInterface'
import { DarkModeContext } from '../../providers/DarkMode';

import * as Styles from './HomeStyles'

export default function Home() {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState({ value: '' })
  const [ loading, setLoading ] = useState(true)
  const { darkMode } = useContext(DarkModeContext)

  useEffect(() => {
    const cachedCountries = localStorage.getItem('countries')

    if (cachedCountries) {
      const allCountries = JSON.parse(cachedCountries)
      setCountries(allCountries)
      setAllCountries(allCountries)
      setLoading(false)
    } else {
      getCountries().then(countries => {
        localStorage.setItem('countries', JSON.stringify(countries))
        setCountries(countries)
        setAllCountries(countries)
        setLoading(false)
      })
    }

  }, [])

  const debouncedHandleSearchChange = debounce((event) => {
    const search = event.target.value
    setSearch(search)

    const filteredCountries = filterCountries(allCountries, [
      country => filterBySearch(country, search),
      country => filterByRegion(country, region),
    ])
    setCountries(filteredCountries)
  }, 300)

  const handleSearchChange = useCallback((event) => {
    event.persist()
    debouncedHandleSearchChange(event)
  }, [debouncedHandleSearchChange])

  const handleRegionChange = useCallback((region) => {
    setRegion(region)
    const filteredCountries = filterCountries(allCountries, [
      country => filterBySearch(country, search),
      country => filterByRegion(country, region),
    ])
    setCountries(filteredCountries)
  }, [allCountries, search])

  return (
    <Styles.Container darkMode={darkMode}>
      <Header />
      <div style={{ width: '100%', maxWidth: '90%', margin: 'auto' }}>
        <div style={{ margin: '30px 0 40px' }}>
          <SearchBox onChange={handleSearchChange} />
        </div>
        <div style={{ width: '200px', margin: '30px 0 40px' }}>
          <Dropdown onChange={handleRegionChange} />
        </div>
        {
          loading ? <Loader /> : <Countries countries={countries} />
        }
      </div>
    </Styles.Container>
  )
}

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
  return country.region.toLowerCase().includes(region.value.toLowerCase())
}
