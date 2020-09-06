import React from 'react'
import CountryCard from '../CountryCard'
import * as Styles from './CountriesStyles'

export default function Countries({ countries }) {
    return (
      <Styles.Container>
        {countries.map(country => (
          <Styles.CardContainer>
            <CountryCard key={country.name} country={country} />
          </Styles.CardContainer>
        ))}
      </Styles.Container>
    )
}
