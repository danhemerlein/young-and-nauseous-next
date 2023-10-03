'use client'
import ProductCard from '@/components/ProductCard'
import { initCheckout } from '@/lib/payments'
import products from '@/products.json'
import { useState } from 'react'

const defaultCart = {
  products: {},
}

const Index = (props) => {
  const [cart, updateCart] = useState(defaultCart)
  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`)
    return {
      ...cart.products[key],
      pricePerItem: product.price,
    }
  })

  const subtotal = cartItems.reduce((acc, { pricePerItem, quantity }) => {
    return acc + pricePerItem * quantity
  }, 0)

  const totalItems = cartItems.reduce((acc, { quantity }) => {
    return acc + quantity
  }, 0)

  const addToCart = (id) => {
    updateCart((prev) => {
      let cartState = { ...prev }
      if (cartState.products[id]) {
        cartState.products[id].quantity += 1
      } else {
        cartState.products[id] = {
          id,
          quantity: 1,
        }
      }
      return cartState
    })
  }

  const checkout = () => {
    initCheckout({
      lineItems: cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity,
        }
      }),
    })
  }
  return (
    <>
      <p>
        Items: {totalItems}
        <br />
        Cost: {subtotal}
        <br />
        <button onClick={checkout}>checkout</button>
      </p>

      <ul className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-left">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Index
