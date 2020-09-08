import styled from '@emotion/styled'
import { css } from '@emotion/core';

export const Container = styled.div`
  position: relative;

  ${getModeStyles}
`

export const IconContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`

export const Input = styled.input`
  box-shadow: 0 0 5px lightgray;
  padding: 20px 20px 20px 60px;
  border-radius: 4px;
  border: none;
  width: 100%;
`

function getModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    color: white;

    ${Input} {
      background-color: #2a3843;
      box-shadow: 0 0 5px #1e2c34;
      color: white;
      &::placeholder {
        color: white;
      }
    }
  `
}
