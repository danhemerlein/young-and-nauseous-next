import { useState } from 'react'
import { supabase } from '@/supabaseClient'

function SignUpForm({ setCreatingAccount }) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (email, password) => {
    try {
      setLoading(true)
      // const { error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // })
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault
          handleSignUp(email, password)
        }}
      >
        <fieldset>
          <legend className="mb-4 text-center">create account</legend>

          <label htmlFor="signUpEmail" className="block mb-2">
            email
          </label>

          <input
            className="mb-4 w-full border-2 border-red p-2 rounded-sm bg-beige"
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
            className="mb-8 w-full border-2 border-red p-2 rounded-sm bg-beige"
            type="password"
            id="signUpPassword"
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="border-2 border-red p-2 rounded-sm cursor-pointer transition-cubic-bezier bg-beige text-ink hover:bg-ink hover:text-reverse w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? <span>loading...</span> : <span>sign up</span>}
          </button>

          <button
            onClick={() => setCreatingAccount(false)}
            className="text-center mt-8"
          >
            or sign up
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default SignUpForm
