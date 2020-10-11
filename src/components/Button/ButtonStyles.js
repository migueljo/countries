import styled from '@emotion/styled'
import { css } from '@emotion/core';

import colors from '../../colors';

export const Button = styled.button`
  padding: 10px;
  border: none;
  transition: box-shadow 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  ${getModeStyles}

  &:hover {
    box-shadow: 0 0 8px ${colors.gray};
  }

  p {
    margin: 0 0 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

function getModeStyles(props) {
  if (!props.darkMode) return css`
    background-color: ${colors.white};
    box-shadow: 0 0 8px ${colors.lightGray};
  `

  return css`
    background-color: ${colors.oxfordBlue};
    box-shadow: 0 0 8px ${colors.ebonyClay};
    color: ${colors.white};
  `
}
