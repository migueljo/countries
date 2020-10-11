import React, { useContext } from 'react'
import * as Styles from './CountryCardStyles'
import { DarkModeContext } from '../../providers/DarkMode'

export default function CountryCard({ country }) {
  const { darkMode } = useContext(DarkModeContext)
  const population = new Intl.NumberFormat().format(country.population)

  return (
    <Styles.Container darkMode={darkMode}>
      <Styles.ImageCtn>
        <Styles.Image src={country.flag} loading="lazy" />
      </Styles.ImageCtn>
      <Styles.Content>
        <h3>{country.name}</h3>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
      </Styles.Content>
    </Styles.Container>
  )
}
