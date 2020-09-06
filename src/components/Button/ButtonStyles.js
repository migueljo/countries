import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: none;
  box-shadow: 0 0 5px lightgray;
  transition: box-shadow 200ms;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0 0 8px gray;
  }

  p {
    margin: 0 0 0 5px;
  }
`
