import React from 'react'
import CountryCard from '../CountryCard'
import * as Styles from './CountriesStyles'

export default function Countries({ countries }) {
    return (
      <Styles.Container>
        {countries.map(country => (
          <Styles.CardContainer key={country.name}>
            <CountryCard country={country} />
          </Styles.CardContainer>
        ))}
      </Styles.Container>
    )
}
