import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 10px;
  background-color: white;
  border: none;
  box-shadow: 0 0 5px lightgray;
  transition: box-shadow 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:hover {
    box-shadow: 0 0 8px gray;
  }

  p {
    margin: 0 0 0 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
