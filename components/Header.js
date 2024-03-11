import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-transparent z-50 flex justify-center font-lack lg:justify-start">
      {/* min height specified to avoid large layout shifts */}
      <h1 className="min-height font-lack text-[1.6rem]">
        <Link href="/">young and nauseous</Link>
      </h1>
    </header>
  )
}

export default Header
