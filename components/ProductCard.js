'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

import { UseModal } from '@/hooks/UseModal'

const ProductCard = ({ product, index }) => {
  const { title, bpm, is_mood_ring, stems_url, main_url } = product
  const { toggleModal } = UseModal()

  const supabase = createClientComponentClient()
  const [clientSession, setClientSession] = useState(null)

  useEffect(() => {
    const isAuthenticatedClient = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setClientSession(session)
    }
    isAuthenticatedClient()
  })

  return (
    <li className="z-10 flex h-screen flex-col items-center justify-center gap-4 font-lack text-ink">
      <h2 className="relative z-10 font-baroque text-[60px] lowercase lg:text-[124px]">
        {title}

        <sup className="absolute right-[-45px] top-0 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-solid border-ink p-4 font-lack text-sm">
          {index + 1}
        </sup>
      </h2>

      {main_url && (
        <a
          className="link z-10"
          href={main_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          download track as wav
        </a>
      )}
      {stems_url && (
        <a
          className="link z-10"
          href={stems_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          download stems as mp3
        </a>
      )}

      <p className="z-10">{bpm}bpm</p>

      {is_mood_ring &&
        (!clientSession ? (
          <button onClick={toggleModal} className="button z-10 max-w-[200px]">
            log in to create a mood ring
          </button>
        ) : (
          <Link href="/moodring" className="link">
            create a mood ring
          </Link>
        ))}
    </li>
  )
}

export default ProductCard
