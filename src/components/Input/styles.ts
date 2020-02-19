import styled from 'styled-components'

export const StyledInput = styled.input<{ invalid: boolean }>`
  padding: 12px;
  border-radius: 5px;
  border: 2px solid;
  outline: none;
  width: 100%;
  font-size: 1rem;
  line-height: 15px;
  color: ${props => props.invalid ? 'var(--invalid)' : 'var(--mainFontColor)'};
  border-color: ${props => props.invalid ? 'var(--invalid)' : 'var(--mainBorder)'};

  &:-webkit-input-placeholder {
    color: var(--placeholderInputField);
  }

  &:-moz-placeholder {
    color: var(--placeholderInputField);
  }

  &:focus {
    border-color: ${props => props.invalid ? 'var(--invalid)' : 'var(--inputBorderFocus)'};
  }
`
