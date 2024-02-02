import { useState } from 'react'
import { useModal } from '@/hooks/useModal'
import { supabase } from '@/supabaseClient'
import Input from '@/components/Input'

const SignUpForm = ({ setCreatingAccount }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const { toggleModal } = useModal()

  const handleSignUp = async (email, password) => {
    if (password !== passwordConfirmation) {
      alert('Passwords do not match')
      return
    }
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
      toggleModal()
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSignUp(email, password)
      }}
    >
      <fieldset>
        <legend className="text-lg mb-4 text-center">create account</legend>

        <Input
          label="email"
          type="email"
          id="signUpEmail"
          placeholder="email"
          value={email}
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="password"
          type="password"
          id="signUpPassword"
          placeholder="password"
          value={password}
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          label="re-enter password"
          type="password"
          id="signUpPasswordConfirmation"
          placeholder="password"
          value={passwordConfirmation}
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <p className="mb-8 text-sm">password must be at least 6 characters</p>

        <button
          className="border-2 border-ink p-2 rounded-sm cursor-pointer transition-cubic-bezier bg-reverse text-ink hover:bg-ink hover:text-reverse w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? <span>loading...</span> : <span>sign up</span>}
        </button>

        <button
          onClick={() => setCreatingAccount(false)}
          type="button"
          className="text-center mt-8 underline cursor-pointer"
        >
          or log in
        </button>
      </fieldset>
    </form>
  )
}

export default SignUpForm
