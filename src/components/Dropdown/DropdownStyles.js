// import styled from '@emotion/styled'
import { css } from '@emotion/core'

const customStyles = {
  control: (styles) => css`
    ${styles}
    box-shadow: 0 0 5px lightgray;
    display: flex;
    height: 55px;
    border: none;
    padding: 0 10px 0 20px;
  `,
  menu: (styles) => css`
    ${styles};
    padding: 10px 25px;
  `,
  option: () => css`
    padding: 5px;
    color: black;
  `,
  indicatorSeparator: () => ({}),
  dropdownIndicator: (styles) => css`
    ${styles}
    color: gray;
  `,
  placeholder: () => css`
    color: black;
  `
}

export default customStyles
