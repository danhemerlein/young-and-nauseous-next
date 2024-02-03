import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import ProductCard from '@/components/ProductCard'

const ProductList = async () => {
  cookies().getAll() // Keep cookies in the JS execution context for Next.js build
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('products').select('*')
  if (error) {
    console.error(error)
  }

  return (
    <ul className="mt-[-100vh] lg:mt-0">
      {data.map((product, key) => {
        return <ProductCard key={product.id} product={product} index={key} />
      })}
    </ul>
  )
}

export default ProductList
