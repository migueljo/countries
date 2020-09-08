import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${getModeStyles}
`

function getModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    background-color: #202e36;
  `
}
