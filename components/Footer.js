import Image from 'next/image'

import FooterLinks from './FooterLinks'
import Heart from './Heart'

const Footer = () => {
  return (
    <footer className="footer flex h-screen flex-col justify-between ">
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <h2 className="font-lack uppercase text-ink">y&n</h2>
        <div className="z-1 grid grid-cols-2 gap-6 lg:grid-cols-3">
          <Image
            src="/images/building.jpg"
            alt="building"
            width="400"
            height="400"
          />

          <Image src="/images/shoes.jpg" alt="shoes" width="400" height="400" />

          <div className="hidden lg:block">
            <Heart />
          </div>
        </div>
      </div>

      <h3 className="w-full text-center font-baroque">Young and Nauseous</h3>
      <FooterLinks />
    </footer>
  )
}

export default Footer
