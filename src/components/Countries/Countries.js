import React from 'react'
import { Link } from 'react-router-dom'

import CountryCard from '../CountryCard'
import * as Styles from './CountriesStyles'

export default function Countries({ countries }) {
  return (
    <Styles.Container>
      {countries.map(country => (
        <Link to={`/country/${country.name.toLowerCase()}`} key={country.name} style={{ textDecoration: 'none', color: 'black' }}>
          <Styles.CardContainer>
            <CountryCard country={country} />
          </Styles.CardContainer>
        </Link>
      ))}
    </Styles.Container>
  )
}
