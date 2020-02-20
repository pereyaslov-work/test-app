import React from 'react'

import { StyledButton } from './styles'

export interface IProps {
  disabled?: boolean,
  className?: string,
  children: React.ReactNode,
  onClick: () => void
}

const Button: React.FC<IProps> = ({ children, onClick, className, disabled = false }) => {
  return (
    <StyledButton
      blocked={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button
