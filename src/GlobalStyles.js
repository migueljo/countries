import React from 'react'
import {Global, css} from '@emotion/core'

const styles = css`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default function() {
  return <Global styles={styles} />
}
