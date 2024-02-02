'use client'

import { createContext, useEffect, useState } from 'react'

import { supabase } from '@/supabaseClient'

export const AuthContext = createContext()

export const UseAuthState = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return session
}

export const UseAuth = () => {
  const session = UseAuthState()
  return { session }
}
