'use client'
import { useEffect, useState } from 'react'

import Hero from '@/components/Hero'
import ProductList from '@/components/ProductList'
import { supabase } from '@/supabaseClient'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (error) {
        console.error(error)
      }

      setData(data)

      if (error) {
        console.error(error)
      }

      setData(data)
    }

    fetchData()
  }, [])
  return (
    <>
      <Hero />
      <ProductList products={data} />
    </>
  )
}

export default Home
