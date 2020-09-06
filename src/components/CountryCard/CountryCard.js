import React from 'react'
import * as Styles from './CountryCardStyles'

export default function CountryCard({ country }) {
    return (
        <Styles.Container>
            <Styles.ImageCtn>
                <Styles.Image src={country.flag} />
            </Styles.ImageCtn>
            <Styles.Content>
                <h3>{country.name}</h3>
                <p>
                    <strong>Population:</strong> {country.population}
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
