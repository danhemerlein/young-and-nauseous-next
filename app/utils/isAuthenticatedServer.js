import supabaseServer from './supabaseServer'

export const isAuthentificatedServer = async () => {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession()
  if (!session) {
    return false
  } else {
    return true
  }
}
