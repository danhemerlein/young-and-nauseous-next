import supabaseServer from './supabaseServer'

export const isAuthenticatedServer = async () => {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession()
  return session
}
