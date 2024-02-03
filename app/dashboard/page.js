import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import DashboardImageGrid from '@/components/DashboardImageGrid'

import isAuthenticatedServer from '../utils/isAuthenticatedServer'
import supabaseServer from '../utils/supabaseServer'

const Dashboard = async () => {
  cookies().getAll()
  const session = await isAuthenticatedServer()
  const supabase = supabaseServer()

  // dashboard is a protected route, so we redirect to the home page if the user is not authenticated
  if (!session) {
    redirect('/')
  }

  const { data, error } = await supabase
    .from('rings')
    .select()
    .filter('user_id', 'eq', session.user.id)

  if (error) {
    console.error(error)
  }

  return (
    <>
      <h2 className="font-lack">your rings:</h2>
      <DashboardImageGrid rings={data} />
    </>
  )
}

export default Dashboard
