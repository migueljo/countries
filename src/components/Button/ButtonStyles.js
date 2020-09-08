import styled from '@emotion/styled'
import { css } from '@emotion/core';

export const Button = styled.button`
  padding: 10px;
  border: none;
  transition: box-shadow 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${getModeStyles}

  &:hover {
    box-shadow: 0 0 8px gray;
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
    background-color: white;
    box-shadow: 0 0 8px lightgray;
  `

  return css`
    background-color: #2a3843;
    box-shadow: 0 0 8px #1e2c34;
    color: white;
  `
}
