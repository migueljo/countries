import styled from '@emotion/styled'
import { css } from '@emotion/core';

import colors from '../../colors'

export const Header = styled.header`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${getModeStyles}
`

export const Title = styled.p`
  font-weight: bold;
`

export const Mode = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  span {
    margin-left: 7px;
  }
`

function getModeStyles(props) {
  if (!props.darkMode) return css`
    box-shadow: 0 2px 4px ${colors.lightGray};
  `

  return css`
    background-color: ${colors.oxfordBlue};
    color: white;
    box-shadow: 0 2px 4px ${colors.ebonyClay};

    ${Mode} {
      color: ${colors.white};
    }
  `
}
