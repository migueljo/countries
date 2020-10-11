import { css } from '@emotion/core'

import colors from '../../colors'

export default (darkMode) => ({
  control: (styles) => css`
    ${styles}
    display: flex;
    height: 55px;
    border: none;
    padding: 0 10px 0 20px;
    box-shadow: 0 0 5px ${darkMode ? colors.ebonyClay : colors.lightGray};
    background-color: ${darkMode ? colors.oxfordBlue : colors.white};
  `,
  menu: (styles) => css`
    ${styles};
    padding: 10px 25px;
    background-color: ${darkMode ? colors.oxfordBlue : colors.white};
  `,
  option: () => css`
    padding: 5px;
    color: ${darkMode ? colors.white : colors.black};
  `,
  singleValue: () => css`
    color: ${darkMode ? colors.white : colors.black};
  `,
  indicatorSeparator: () => ({}),
  dropdownIndicator: (styles) => css`
    ${styles}
    color: ${darkMode ? colors.white : colors.gray};
  `,
  placeholder: () => css`
    color: ${darkMode ? colors.white : colors.black};
  `
})
