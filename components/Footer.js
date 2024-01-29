'use client'
import Typewriter from './Typewriter'

const Footer = () => {
  return (
    <footer className="w-full h-screen flex items-center justify-center bg-beige">
      <h2 className="text-ink uppercase text-center text-[248px] font-lack">
        <Typewriter text="y&n" delay={600} />
      </h2>
    </footer>
  )
}

export default Footer
