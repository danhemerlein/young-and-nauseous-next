import { useState } from 'react'
import { useModal } from '@/hooks/useModal'
import { supabase } from '@/supabaseClient'

const SignInForm = ({ setCreatingAccount }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { toggleModal } = useModal()

  const handleLogin = async (email, password) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
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
        handleLogin(email, password)
      }}
    >
      <fieldset>
        <legend className="mb-4 text-center">
          sign in with email and password
        </legend>

        <label htmlFor="signInEmail" className="block mb-2">
          email
        </label>

        <input
          className="mb-4 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          type="email"
          id="signInEmail"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="signInPassword" className="block mb-2">
          password
        </label>

        <input
          className="mb-8 w-full border-2 border-ink p-2 rounded-sm bg-reverse"
          type="password"
          id="signInPassword"
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="border-2 border-ink p-2 rounded-sm cursor-pointer transition-cubic-bezier bg-reverse text-ink hover:bg-ink hover:text-reverse w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? <span>loading...</span> : <span>sign in</span>}
        </button>

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
