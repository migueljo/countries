import React from 'react'

import CountryCard from '../CountryCard'
import * as Styles from './CountriesStyles'

export default function Countries({ countries }) {
  return (
    <Styles.Container>
      { countries.length > 0 ? (
        countries.map(country => (
          <Styles.Card
            to={`/country/${country.alpha3Code.toLowerCase()}`}
            key={country.alpha3Code}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <CountryCard country={country} />
          </Styles.Card>
        ))
      ) : (
        <p>No countries found</p>
      )}
    </Styles.Container>
  )
}
