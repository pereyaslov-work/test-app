import styled from 'styled-components'

export const StyledButton = styled.button<{ blocked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 10px;
  font-size: 1rem;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s all ease;
  color: ${props => props.theme.buttonFont};
  background-color: ${props => props.theme.primary};
  opacity: ${props => props.blocked && '0.7'};
`
