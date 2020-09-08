import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Container = styled.div`
  ${getModeStyles}
`

function getModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    background-color: #202e36;
    background-color: white;
  `
}
