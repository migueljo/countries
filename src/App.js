import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home/Home';
import Country from './pages/Country/index';

import DarkModeProvider from './providers/DarkMode';

import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/country/:countryCode'>
            <Country />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
