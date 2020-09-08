import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Loader from '../../components/Loader'

import { DarkModeContext } from '../../providers/DarkMode';

import * as Styles from './CountryStyles'

export default function Country() {
  const { countryCode } = useParams()
  const history = useHistory()
  const [ country, setCountry ] = useState()
  const [ borders, setBorders ] = useState()
  const [ loading, setLoading ] = useState(true)
  const { darkMode } = useContext(DarkModeContext)
  const population = country && new Intl.NumberFormat().format(country.population)

  const handleBack = useCallback(() => {
    history.goBack()
  }, [history])

  useEffect(() => {
    const allCountries = JSON.parse(localStorage.getItem('countries'))
    const currentCountry = allCountries.find(
      c => c.alpha3Code.toLowerCase() === countryCode.toLowerCase()
    )
    const borders = currentCountry.borders.map(border => {
      const countryBorder = allCountries.find(
        country => country.alpha3Code.toLowerCase() === border.toLowerCase()
      )
      return countryBorder
    })
    setBorders(borders)
    setCountry(currentCountry)
    setLoading(false)
  }, [setCountry, countryCode])

  return (
    <Styles.Container darkMode={darkMode}>
      <Header />
      <Styles.Content>
        <Styles.BackButtonContainer>
          <Button text='Back' icon='arrow-left' onClick={handleBack} />
        </Styles.BackButtonContainer>
        {
          loading ? <Loader /> : (
            <>
              <Styles.FlagContainer>
                <Styles.Flag src={country.flag} />
              </Styles.FlagContainer>
              <Styles.Title>{country.name}</Styles.Title>
              <Styles.Text>
                <strong>Native Name</strong>: {country.nativeName}
              </Styles.Text>
              <Styles.Text>
                <strong>Population</strong>: {population}
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
                  borders.map(border => {
                    return (
                      <Styles.BorderCountry key={border.name}>
                        <Link to={`/country/${border.alpha3Code.toLowerCase()}`}>
                          <Button text={border.name} />
                        </Link>
                      </Styles.BorderCountry>
                    )
                  })
                }
              </Styles.BorderCountries>
            </>
          )
        }
      </Styles.Content>
    </Styles.Container>
  )
}
