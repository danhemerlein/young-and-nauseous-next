import { useState } from 'react'
import { UseModal } from '@/hooks/UseModal'
import { supabase } from '@/supabaseClient'
import Input from '@/components/SignUpSignIn/Input'
import SubmitButton from './SubmitButton'
import { validateEmail } from '@/lib/helper-functions'

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
        <legend className="text-lg mb-4 text-center">
          sign in with email and password
        </legend>

        <Input
          label="email"
          type="email"
          id="signInEmail"
          placeholder="email"
          value={email}
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="password"
          type="password"
          id="signInPassword"
          placeholder="your password"
          value={password}
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton loading={isLoading} isError={isError} error={error} />

        <button
          onClick={() => setCreatingAccount(true)}
          type="button"
          className="text-center mt-8 underline cursor-pointer"
        >
          or create an account
        </button>
      </fieldset>
    </form>
  )
}

export default SignInForm
