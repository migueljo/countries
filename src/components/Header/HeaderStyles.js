import styled from '@emotion/styled'
import { css } from '@emotion/core';

export const Header = styled.header`
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px lightgray;

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

    span {
        margin-left: 7px;
    }
`

function getModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    background-color: #2a3843;
    color: white;
    box-shadow: 0 2px 4px #1e2c34;

    ${Mode} {
      color: white;
    }
  `
}
