import styled from '@emotion/styled'
import { css } from '@emotion/core';

import colors from '../../colors'

export const Container = styled.article`
  border-radius: 4px;

  ${getDarkModeStyles}
`

export const ImageCtn = styled.figure`
  padding: 0;
  margin: 0;
  width: 100%;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid ${colors.lightGray};
`

export const Content = styled.div`
  padding: 5px 15px 30px;

  p {
    margin: 0 0 5px 0;
  }
`

function getDarkModeStyles(props) {
  if (!props.darkMode) return css`
    box-shadow: 0 0 5px ${colors.lightGray};
  `

  return css`
    background-color: ${colors.oxfordBlue};
    box-shadow: 0 0 5px ${colors.ebonyClay};
    color: ${colors.white};
  `
}
