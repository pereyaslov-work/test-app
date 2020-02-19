import React, { useCallback } from 'react'
import { Input, Button } from 'components'

import { StyledSignIn } from './styles'

const SignIn = () => {
  const handleEmail = useCallback(() => {}, [])
  const handlePassword = useCallback(() => {}, [])
  const handleSubmit = useCallback(() => {}, [])

  return (
    <StyledSignIn>
      <Input placeholder={'Email'} type="text" value='' onChange={handleEmail} />
      <Input placeholder={'Password'} type="password" value='' onChange={handlePassword} />
      <Button onClick={handleSubmit}>Sign in</Button>
    </StyledSignIn>
  )
}

export default SignIn
