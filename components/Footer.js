'use client'
import Heart from './Heart'
import Typewriter from './Typewriter'
import Image from 'next/image'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="flex justify-between flex-col lg:block h-screen pb-4 lg:pb-12 relative">
      <div className="h-full flex flex-col lg:grid lg:grid-cols-2">
        <div className="flex jusify-between flex-col lg:h-full">
          <div className="flex-grow flex justify-between flex-col">
            <h2 className="text-ink uppercase font-lack">
              <Typewriter text="y&n" delay={600} />
            </h2>
          </div>
        </div>

        <h3 className="font-baroque hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-0">
          Young and Nauseous
        </h3>

        <div className="flex justify-between flex-col relative">
          <div className="h-[calc(100%-1.5rem)] grid grid-cols-2 lg:grid-cols-3 gap-6 z-1 lg:pt-6">
            <Image
              src="/images/building.jpg"
              alt="building"
              width="400"
              height="400"
            />

            <Image
              src="/images/shoes.jpg"
              alt="shoes"
              width="400"
              height="400"
            />

            <div className="hidden lg:block lg:mt-6">
              <Heart />
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:absolute lg:right-[15%] lg:top-[45%]">
            <p className="font-lack">fonts:</p>
            <p className="font-lack lg:text-2xl ml-14">
              <a
                href="https://gitlab.com/velvetyne/lack"
                className="transition-colors ease-linear duration-300 hover:text-red"
                target="_blank"
              >
                lack
              </a>
            </p>
            <p className="font-baroque text-6xl ml-14">
              <a
                href="https://www.fonts.com/font/itc/young-baroque"
                className="transition-colors ease-linear duration-300 hover:text-red"
                target="_blank"
              >
                young baroque
              </a>
            </p>
          </div>

          <h3 className="font-baroque mt-16 block text-center lg:hidden w-full z-0">
            Young and Nauseous
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:gap-0 pb-4 lg:grid lg:lg:grid-cols-2">
        <div className="flex justify-between">
          <p className="text-xs font-lack">
            music & site by&nbsp;
            <a
              href="https://danhemerlein.com"
              className="transition-colors ease-linear duration-300 hover:text-red"
              target="_blank"
            >
              dan hemerlein
            </a>
          </p>
        </div>

        <div className="flex-grow flex justify-between items-end">
          <p className="text-xs font-lack">
            recorded & coded in brooklyn new york
          </p>
          <p className="text-xs font-lack">est. 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
