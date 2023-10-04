import HomePage from '@/pages/Home'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}
