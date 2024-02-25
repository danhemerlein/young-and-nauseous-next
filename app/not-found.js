'use client'
import Link from 'next/link'

import Typewriter from '@/components/Typewriter'

const NotFound = () => {
  const string = 'young and nauseous and not found'
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-2 font-lack">
      <h1 className="font-lack ">
        <Typewriter text={string} delay={50} />
      </h1>
      <Link className="button-red text-center" href="/">
        return home
      </Link>
    </div>
  )
}
export default NotFound
