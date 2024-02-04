'use client'
import { useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Typewriter from './Typewriter'

const DashboardImageGrid = ({ rings }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const channel = supabase
      .channel('realtime rings')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'rings',
        },
        () => {
          router.refresh()
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, router])

  return (
    <div className="grid h-screen grid-cols-2">
      {rings?.map((ring, key) => {
        return (
          <div key={key}>
            <Image
              height={600}
              width={600}
              src={ring.data_url}
              alt={ring.title}
            ></Image>
            {ring.title && (
              <Typewriter
                className="text-center font-lack"
                text={ring.title}
                delay={300}
              ></Typewriter>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default DashboardImageGrid
