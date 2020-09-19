import styled from '@emotion/styled'
import { css } from '@emotion/core';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${getModeStyles}
  ${getResponsiveStyles}
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 60px;
`

export const BackButtonContainer = styled.div`
  margin: 40px 0 60px;
  width: 120px;
`

export const Country = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlagContainer = styled.figure`
  padding: 0;
  margin: 0 0 50px 0;
`

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Flag = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  margin-bottom: 30px;
`

export const Texts = styled.div``

export const Left = styled.div``

export const Right = styled.div``

export const Text = styled.p``

export const Subtitle = styled.h2`
  margin-top: 40px;
`

export const BorderCountries = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const BorderCountry = styled.div`
  width: 31%;
  max-width: 200px;
  margin-bottom: 16px;
  a {
    text-decoration: none;
  }
`

function getModeStyles(props) {
  if (!props.darkMode) return css`
    background-color: white;
    box-shadow: 0 0 5px lightgray;

    ${Flag} {
      box-shadow: 0 0 5px lightgray;
    }
  `

  return css`
    background-color: #2a3843;
    box-shadow: 0 0 5px #1e2c34;
    color: white;

    ${Flag} {
      box-shadow: 0 0 5px #1e2c34;
    }
  `
}

function getResponsiveStyles(props) {
  return css`
    @media (min-width: 1000px) {
      ${Country} {
        flex-direction: row;
        justify-content: space-between;
      }

      ${FlagContainer} {
        width: 40%;
      }

      ${CountryInfo} {
        width: 55%;
      }

      ${Title} {
        margin-top: 0;
      }

      ${Texts} {
        display: flex;
      }

      ${Left}, ${Right} {
        width: 50%;
      }
    }
  `
}
