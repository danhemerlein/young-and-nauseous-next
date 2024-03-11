'use client'
import Image from 'next/image'

import { footerLinks } from '@/public/data/footer-links'

import Heart from './Heart'

const Footer = () => {
  return (
    <footer className="footer relative flex h-screen flex-col justify-between lg:block lg:pb-12">
      <div className="flex h-full flex-col lg:grid lg:grid-cols-2">
        <div className="jusify-between flex flex-col lg:h-full">
          <div className="flex flex-grow flex-col justify-between">
            <h2 className="font-lack uppercase text-ink">y&n</h2>
          </div>
        </div>

        <h3 className="absolute left-[50%] top-[50%] z-0 hidden w-full translate-x-[-50%] translate-y-[-50%] font-baroque lg:block">
          Young and Nauseous
        </h3>

        <div className="relative flex flex-col justify-between">
          <div className="z-1 grid h-[calc(100%-1.5rem)] grid-cols-2 gap-6 lg:grid-cols-3 lg:pt-6">
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

            <div className="hidden lg:block">
              <Heart />
            </div>
          </div>

          <div className="mt-8 lg:absolute lg:right-[15%] lg:top-[45%] lg:mt-0">
            <p className="font-lack">fonts:</p>
            <p className="ml-14 font-lack lg:text-2xl">
              <a
                href="https://gitlab.com/velvetyne/lack"
                className="link"
                target="_blank"
              >
                lack
              </a>
            </p>
            <p className="ml-14 font-baroque text-6xl">
              <a
                href="https://www.fonts.com/font/itc/young-baroque"
                className="link"
                target="_blank"
              >
                young baroque
              </a>
            </p>
          </div>

          <h3 className="z-0 mt-16 block w-full text-center font-baroque lg:hidden">
            Young and Nauseous
          </h3>
        </div>
      </div>

      <div className="flex flex-col font-lack lg:grid lg:lg:grid-cols-2 lg:gap-0 lg:pb-4">
        <div className="flex flex-col justify-between text-sm">
          <div className="mb-4 grid grid-cols-3 gap-2 lg:flex lg:gap-4 ">
            {footerLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  className="dotted-link"
                  target="_blank"
                >
                  {link.dsp}
                </a>
              )
            })}
          </div>

          <p className="text-sm">
            music & site by&nbsp;
            <a
              href="https://danhemerlein.com"
              className="dotted-link"
              target="_blank"
            >
              dan hemerlein
            </a>
          </p>
        </div>

        <div className="flex flex-grow items-end justify-between">
          <p className="font-lack text-sm">
            recorded & coded in brooklyn new york
          </p>
          <p className="font-lack text-sm">est. 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
