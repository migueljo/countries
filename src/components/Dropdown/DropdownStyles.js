// import styled from '@emotion/styled'
import { css } from '@emotion/core'

export default (darkMode) => ({
  control: (styles) => css`
    ${styles}
    display: flex;
    height: 55px;
    border: none;
    padding: 0 10px 0 20px;
    box-shadow: 0 0 5px ${darkMode ? '#1e2c34' : 'lightgray'};
    background-color: ${darkMode ? '#2a3843' : 'white'};
  `,
  menu: (styles) => css`
    ${styles};
    padding: 10px 25px;
    background-color: ${darkMode ? '#2a3843' : 'white'};
  `,
  option: () => css`
    padding: 5px;
    color: ${darkMode ? 'white' : 'black'};
  `,
  singleValue: () => css`
    color: ${darkMode ? 'white' : 'black'};
  `,
  indicatorSeparator: () => ({}),
  dropdownIndicator: (styles) => css`
    ${styles}
    color: ${darkMode ? 'white' : 'gray'};
  `,
  placeholder: () => css`
    color: ${darkMode ? 'white' : 'black'};
  `
})
