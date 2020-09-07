import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    animation: ${spin} 1s linear infinite;
  }
`
