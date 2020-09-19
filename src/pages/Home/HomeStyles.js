import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${getModeStyles}
`

export const Body = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

function getModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    background-color: #202e36;
  `
}
