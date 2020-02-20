import React, { useCallback, useRef, useEffect, memo } from 'react'

import { StyledInput } from './styles'

export interface IProps {
  type?: string,
  className?: string,
  value: string,
  invalid?: boolean,
  placeholder?: string,
  focus?: boolean,
  disabled?: boolean,
  onChange: (value: string) => void,
  onFocus?: (event: React.FocusEvent) => void,
  onBlur?: () => void
}

const Input: React.FC<IProps> = ({
  type = 'text',
  className,
  value,
  placeholder = '',
  invalid = false,
  focus = false,
  onChange,
  onBlur,
  onFocus,
}) => {
  const inputElement = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputElement.current) {
      focus
        ? inputElement.current.focus()
        : inputElement.current.blur()
    }
  }, [focus])


  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }, [])

  return (
    <StyledInput
      className={className}
      ref={inputElement}
      type={type}
      placeholder={placeholder}
      value={value}
      invalid={invalid}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

export default memo(Input)
