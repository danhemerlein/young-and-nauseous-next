'use client'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import products from '@/products.json'
import { useCart } from '@/hooks/useCart'

const Home = () => {
  const { addToCart } = useCart()
  const [showType, setShowType] = useState('stems')

  const stems = products.filter((product) => product.type === 'stems')
  const samples = products.filter((product) => product.type === 'samples')
  const other = products.filter((product) => product.type === 'other')

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
        <Button handler={() => setShowType('stems')} text="stems"></Button>
        <Button handler={() => setShowType('samples')} text="samples"></Button>
        <Button handler={() => setShowType('other')} text="other"></Button>
      </div>

      {showType == 'stems' &&
        (stems.length > 0 ? (
          <ul>
            {stems.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              )
            })}
          </ul>
        ) : (
          <p>coming soon</p>
        ))}

      {showType == 'samples' &&
        (samples.length > 0 ? (
          <ul>
            {samples.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              )
            })}
          </ul>
        ) : (
          <p>coming soon</p>
        ))}

      {showType == 'other' &&
        (other.length > 0 ? (
          <ul>
            {samples.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              )
            })}
          </ul>
        ) : (
          <p>coming soon</p>
        ))}

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
