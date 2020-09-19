import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Card = styled(Link)`
  margin: 0 0 40px 0;
  width: 100%;

  @media (min-width: 600px) {
    width: 48%;
  }

  @media (min-width: 900px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    width: 22%;
  }
`
