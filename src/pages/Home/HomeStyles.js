import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${getModeStyles}
  ${getResponsiveStyles}
`

export const Body = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

export const BodyHeader = styled.div`

`

export const SearchContainer = styled.div`
  margin: 30px 0 40px;
`

export const DropdownContainer = styled.div`
  width: 200px;
  margin: 30px 0 40px;
`

function getResponsiveStyles(props) {
  return css`
    @media (min-width: 1000px) {
      ${BodyHeader} {
        display: flex;
        justify-content: space-between;
      }
      ${SearchContainer} {
        width: 500px;
      }
    }
  `
}

function getModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    background-color: #202e36;
  `
}
