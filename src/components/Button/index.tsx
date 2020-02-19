import React from 'react'

import { StyledButton } from './styles'

export interface IProps {
  className?: string,
  children: React.ReactNode,
  onClick: () => void
}

const Button: React.FC<IProps> = ({ children, onClick, className }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button
