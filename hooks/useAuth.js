import { useState, createContext, useContext, useEffect } from 'react'

import { supabase } from '@/supabaseClient'

export const AuthContext = createContext()

export const useAuthState = () => {
  const [, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const auth = useContext(AuthContext)
  return auth
}

export const useAuth = () => {
  const session = useAuthState()
  return { session }
}
