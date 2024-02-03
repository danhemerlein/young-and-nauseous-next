'use client'
import { useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
    <div className="grid grid-cols-2">
      {rings?.map((ring, key) => {
        return (
          <div key={key}>
            {ring.title && <h3>{ring.title}</h3>}

            <Image
              height={600}
              width={600}
              src={ring.data_url}
              alt={ring.title}
            ></Image>
          </div>
        )
      })}
    </div>
  )
}

export default DashboardImageGrid
