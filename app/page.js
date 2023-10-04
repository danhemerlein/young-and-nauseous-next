import HomePage from '@/pages/Home'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <HomePage />
    </main>
  )
}
