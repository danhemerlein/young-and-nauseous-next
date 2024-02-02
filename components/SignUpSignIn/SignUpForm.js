import { useState } from 'react'

import Input from '@/components/SignUpSignIn/Input'
import { UseModal } from '@/hooks/UseModal'
import { validateEmail } from '@/lib/helper-functions'
import { supabase } from '@/supabaseClient'

import SubmitButton from './SubmitButton'

const SignUpForm = ({ setCreatingAccount }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const { toggleModal } = UseModal()
  const PASSWORD_MIN_LENGTH = 8

  const handleSignUp = async (email, password) => {
    setIsLoading(true)
    setError('')
    setIsError(false)

    if (password !== passwordConfirmation) {
      setIsError(true)
      setError('passwords do not match')
      return
    }

    if (password.length < PASSWORD_MIN_LENGTH) {
      setIsError(true)
      setError('password is too short')
      return
    }

    if (!validateEmail(email)) {
      setIsError(true)
      setError('invalid email')
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      if (error) throw error
    } catch (error) {
      setIsError(true)
      setError(error.error_description || error.message)
      return
    } finally {
      setIsLoading(false)
    }
    toggleModal()
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSignUp(email, password)
      }}
    >
      <fieldset>
        <legend className="mb-4 text-center text-lg">create account</legend>

        <Input
          label="email"
          type="email"
          id="signUpEmail"
          placeholder="email"
          value={email}
          className="mb-4 w-full rounded-sm border-2 border-ink bg-reverse p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="password"
          type="password"
          id="signUpPassword"
          placeholder="password"
          value={password}
          className="mb-4 w-full rounded-sm border-2 border-ink bg-reverse p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          label="re-enter password"
          type="password"
          id="signUpPasswordConfirmation"
          placeholder="password"
          value={passwordConfirmation}
          className="mb-4 w-full rounded-sm border-2 border-ink bg-reverse p-2"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <p className="mb-8 text-sm">
          password must be at least {PASSWORD_MIN_LENGTH} characters
        </p>

        <SubmitButton isLoading={isLoading} isError={isError} error={error} />

        <button
          onClick={() => setCreatingAccount(false)}
          type="button"
          className="mt-8 cursor-pointer text-center underline"
        >
          or log in
        </button>
      </fieldset>
    </form>
  )
}

export default SignUpForm
