import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import { useSignIn, useStores } from 'store'
import { Input, Button } from 'components'

import { StyledSignIn } from './styles'

const SignIn = observer(() => {
  const { signIn } = useStores()
  const { email, password } = useSignIn()

  const handlePassword = useCallback((value: string) => password.onChange(value), [])
  const handleBlurPassword = useCallback(() => password.onBlur(), [])
  const handleFocusPassword = useCallback(() => password.onFocus(), [])

  const handleEmail = useCallback((value: string) => email.onChange(value), [])
  const handleBlurEmail = useCallback(() => email.onBlur(), [])
  const handleFocusEmail = useCallback(() => email.onFocus(), [])

  const handleSubmit = useCallback(() => signIn.signIn(), [])

  return (
    <StyledSignIn>
      <Input
        placeholder={'Email'}
        type="text"
        value={email.value}
        invalid={!!email.error}
        onChange={handleEmail}
        onBlur={handleBlurEmail}
        onFocus={handleFocusEmail}
      />

      <Input
        placeholder={'Password'}
        type="password"
        value={password.value}
        invalid={!!password.error}
        onChange={handlePassword}
        onBlur={handleBlurPassword}
        onFocus={handleFocusPassword}
      />

      <Button
        disabled={!signIn.valid}
        onClick={handleSubmit}
      >
        Sign in
      </Button>
    </StyledSignIn>
  )
})

export default SignIn
