import React from 'react'

import Icon from '../Icon'

import * as Styles from './HeaderStyles'

export default function Header() {
    return (
        <Styles.Header>
            <Styles.Title>Where in the world?</Styles.Title>
            <Styles.Mode>
                <Icon name='moon' />
                <span>Dark mode</span>
            </Styles.Mode>
        </Styles.Header>
    )
}
