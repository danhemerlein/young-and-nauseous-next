import HomePage from '@/pages/Home'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4 mt-[78px]">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
