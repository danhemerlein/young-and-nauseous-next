'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import ProductList from '@/components/ProductList'
import products from '@/products.json'

const Home = () => {
  const [showType, setShowType] = useState('stems')
  const types = ['stems', 'samples', 'other']

  return (
    <div className="min-h-[calc(100vh-78px)] flex flex-col mt-[78px] p-4">
      {/* <div className="w-full flex items-center justify-center">/
        <Image
          src={'/images/ascii-text-art.png'}
          width="900"
          height="900"
          alt={'young and nauseous'}
        ></Image>
      </div> */}
      <div className="flex gap-2">
        {types.map((type) => {
          return (
            <Button key={type} handler={() => setShowType(type)} text={type} />
          )
        })}
      </div>
      <ProductList
        type={showType}
        array={products.filter((product) => product.type === showType)}
      />
      {/* <div className="w-full flex items-center justify-center">
        <Image
          src={'/images/building.jpg'}
          width="900"
          height="900"
          alt={'building'}
        ></Image>
      </div> */}
    </div>
  )
}

export default Home
