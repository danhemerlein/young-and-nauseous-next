import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
const supabase = createClientComponentClient()

export const isAuthenticatedClient = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}

export const authStateChange = (cb) => {
  supabase.auth.onAuthStateChange((_event, session) => {
    cb(session)
  })
}
