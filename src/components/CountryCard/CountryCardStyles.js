import styled from '@emotion/styled'
import { css } from '@emotion/core';

export const Container = styled.article`
  box-shadow: 0 0 5px lightgray;
  border-radius: 4px;

  ${getDarkModeStyles}
`

export const ImageCtn = styled.figure`
  padding: 0;
  margin: 0;
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid lightgray;
`

export const Content = styled.div`
  padding: 5px 15px 30px;

  p {
    margin: 0 0 5px 0;
  }
`

function getDarkModeStyles(props) {
  if (!props.darkMode) return ''

  return css`
    background-color: #2a3843;
    color: white;
    box-shadow: 0 0 5px #1e2c34;
  `
}
