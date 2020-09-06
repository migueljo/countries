import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Button from '../../components/Button'

import * as Styles from './CountryStyles'

export default function Country() {
  const { countryName } = useParams()
  const [ country, setCountry ] = useState()

  useEffect(() => {
    const allCountries = JSON.parse(localStorage.getItem('countries'))
    const currentCountry = allCountries.find(c => c.name.toLowerCase() === countryName)
    setCountry(currentCountry)
  }, [setCountry, countryName])

  console.log({ country })

  return (
    <>
      <Header />
      <Styles.Content>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Styles.BackButtonContainer>
            <Button text='Back' icon='arrow-left' />
          </Styles.BackButtonContainer>
        </Link>
        {
          country && (
            <>
              <Styles.FlagContainer>
                <Styles.Flag src={country.flag} />
              </Styles.FlagContainer>
              <Styles.Title>{country.name}</Styles.Title>
              <Styles.Text>
                <strong>Native Name</strong>: {country.nativeName}
              </Styles.Text>
              <Styles.Text>
                <strong>Population</strong>: {country.population}
              </Styles.Text>
              <Styles.Text>
                <strong>Region</strong>: {country.region}
              </Styles.Text>
              <Styles.Text>
                <strong>Sub Region</strong>: {country.subregion}
              </Styles.Text>
              <Styles.Text>
                <strong>Capital</strong>: {country.capital}
              </Styles.Text>
              <Styles.Text>
                <strong>Top Level Domain:</strong>
                {
                  country.topLevelDomain.map((domain, i) => (
                    <span key={domain}>
                      {i === 0 ? ` ${domain}` : `, ${domain}`}
                    </span>
                  ))
                }
              </Styles.Text>
              <Styles.Text>
                <strong>Currencies:</strong>
                {
                  country.currencies.map((currency, i) => (
                    <span key={currency.code}>
                      {i === 0 ? ` ${currency.name}` : `, ${currency.name}`}
                    </span>
                  ))
                }
              </Styles.Text>
              <Styles.Text>
                <strong>Languages:</strong>
                {
                  country.languages.map((lan, i) => (
                    <span key={lan.iso639_1}>
                      {i === 0 ? ` ${lan.name}` : `, ${lan.name}`}
                    </span>
                  ))
                }
              </Styles.Text>
              <Styles.Subtitle>
                Border Countries
              </Styles.Subtitle>
              <Styles.BorderCountries>
                {
                  country.borders.map(border => (
                    <Button text={border} key={border} />
                  ))
                }
              </Styles.BorderCountries>
            </>
          )
        }
      </Styles.Content>
    </>
  )
}
