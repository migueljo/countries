import React, { useState, useEffect } from 'react';

import Header from './components/Header'
import SearchBox from './components/SearchBox';
import Dropdown from './components/Dropdown';

import {getCountries} from './data/APIInterface'

import GlobalStyles from './GlobalStyles'
import Countries from './components/Countries/Countries';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const cachedCountries = localStorage.getItem('countries')

    if (cachedCountries) {
      setCountries(JSON.parse(cachedCountries))
    } else {
      getCountries().then(c => {
        localStorage.setItem('countries', JSON.stringify(c))
        setCountries(c)
      })
    }

  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{ width: '100%', maxWidth: '90%', margin: 'auto' }}>
        <div style={{ margin: '30px 0 40px' }}>
          <SearchBox />
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
