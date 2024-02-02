import { useState } from 'react'

import Input from '@/components/SignUpSignIn/Input'
import { UseModal } from '@/hooks/UseModal'
import { validateEmail } from '@/lib/helper-functions'
import { supabase } from '@/supabaseClient'

import SubmitButton from './SubmitButton'

const SignInForm = ({ setCreatingAccount }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { toggleModal } = UseModal()

  const handleLogin = async (email, password) => {
    setError('')
    setIsError(false)

    if (!validateEmail(email)) {
      setIsError(true)
      setError('invalid email')
      return
    }

    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        throw error
      }
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
        handleLogin(email, password)
      }}
    >
      <fieldset>
        <legend className="mb-4 text-center text-lg">
          sign in with email and password
        </legend>

        <Input
          label="email"
          type="email"
          id="signInEmail"
          placeholder="email"
          value={email}
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="password"
          type="password"
          id="signInPassword"
          placeholder="your password"
          value={password}
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton loading={isLoading} isError={isError} error={error} />

        <button
          onClick={() => setCreatingAccount(true)}
          type="button"
          className="mt-8 cursor-pointer text-center underline"
        >
          or create an account
        </button>
      </fieldset>
    </form>
  )
}

export default SignInForm
