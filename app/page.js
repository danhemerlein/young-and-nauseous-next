import ProductList from '@/components/ProductList'
import Record from '@/components/Record'

const Home = async () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <Record />
      <ProductList />
    </div>
  )
}

export default Home
