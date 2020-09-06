import React from 'react'
import * as Styles from './SearchBoxStyles'

export default function SearchBox() {
    return (
        <Styles.Container>
            <Styles.Input placeholder='Search for a country' />
        </Styles.Container>
    )
}
