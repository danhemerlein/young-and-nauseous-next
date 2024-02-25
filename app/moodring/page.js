import { redirect } from 'next/navigation'

import RingOutput from '@/components/RingOutput'

const MoodRing = () => {
  if (process.env.NEXT_PUBLIC_SHOW_ACCOUNT_FEATURES === 'true') {
    return <RingOutput />
  } else {
    redirect('/')
  }
}

export default MoodRing
