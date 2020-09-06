import React from 'react';

import Header from './components/Header'
import SearchBox from './components/SearchBox';
import Dropdown from './components/Dropdown';

import GlobalStyles from './GlobalStyles'

function App() {
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
      </div>
    </>
  );
}

export default App;
