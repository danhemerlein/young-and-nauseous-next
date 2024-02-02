import Record from '@/components/Record'

import ProductList from './ProductList'

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <Record />
      <ProductList />
    </div>
  )
}

export default Home
