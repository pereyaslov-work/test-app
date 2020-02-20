import styled from 'styled-components'

export const StyledInput = styled.input<{ invalid: boolean }>`
  padding: 12px;
  border-radius: 5px;
  border: 2px solid;
  outline: none;
  width: 100%;
  font-size: 1rem;
  line-height: 15px;
  color: ${props => props.invalid ? props.theme.invalid : props.theme.mainFontColor};
  border-color: ${props => props.invalid ? props.theme.invalid : props.theme.mainBorder}};

  &:-webkit-input-placeholder {
    color: ${props => props.theme.placeholderInputField};
  }

  &:-moz-placeholder {
    color: ${props => props.theme.placeholderInputField};
  }

  &:focus {
    border-color: ${props => props.invalid ? props.theme.invalid : props.theme.inputBorderFocus};
  }
`
