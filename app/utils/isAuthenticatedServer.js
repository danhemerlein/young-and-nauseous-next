import supabaseServer from './supabaseServer'

const isAuthenticatedServer = async () => {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession()
  return session
}

export default isAuthenticatedServer
