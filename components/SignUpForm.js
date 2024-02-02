import { useState } from 'react'
import { useModal } from '@/hooks/useModal'
import { supabase } from '@/supabaseClient'

const SignUpForm = ({ setCreatingAccount }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { toggleModal } = useModal()

  const handleSignUp = async (email, password) => {
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
        <legend className="mb-4 text-center">create account</legend>

        <label htmlFor="signUpEmail" className="block mb-2">
          email
        </label>

        <input
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          type="email"
          id="signUpEmail"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="signUpPassword" className="block mb-2">
          password
        </label>

        <input
          className="mb-8 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          type="password"
          id="signUpPassword"
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="my-4">password must be at least 6 characters</p>

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
