import React from 'react'

import Icon from '../Icon';

import * as Styles from './SearchBoxStyles'

export default function SearchBox() {
    return (
        <Styles.Container>
            <Styles.IconContainer>
                <Icon name='search' />
            </Styles.IconContainer>
            <Styles.Input placeholder='Search for a country' />
        </Styles.Container>
    )
}
