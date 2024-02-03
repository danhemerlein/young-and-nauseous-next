import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import ProductCard from '@/components/ProductCard'

const ProductList = async () => {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('products').select('*')
  if (error) {
    console.error(error)
  }

  return (
    <ul>
      {data.map((product, key) => {
        return <ProductCard key={product.id} product={product} index={key} />
      })}
    </ul>
  )
}

export default ProductList
