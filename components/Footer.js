'use client'
import Heart from './Heart'
import Typewriter from './Typewriter'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="h-screen grid grid-cols-2 pb-24 relative">
      <div className="flex jusify-between flex-col h-full">
        <div className="flex-grow flex justify-between flex-col">
          <h2 className="text-ink uppercase text-[248px] font-lack">
            <Typewriter text="y&n" delay={600} />
          </h2>

          <div className="flex justify-between">
            <p className="font-lack">music & site by dan hemerlein</p>
          </div>
        </div>
      </div>

      <p className="font-baroque text-[350px] text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-0">
        Young and Nauseous
      </p>

      <div>
        <div className=" h-full grid grid-cols-3 gap-6 z-1">
          <Image
            src="/images/building.jpg"
            alt="building"
            width="400"
            height="400"
          />
          <Image src="/images/shoes.jpg" alt="shoes" width="400" height="400" />

          <div className="h-full w-full flex">
            <Heart />
          </div>
        </div>

        <p className="font-lack">fonts:</p>
        <p className="font-lack">lack</p>
        <p className="font-baroque">young baroque</p>

        <div className="flex-grow flex justify-between">
          <p className="font-lack">recorded & coded in brooklyn new york</p>
          <p className="font-lack">est. 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
