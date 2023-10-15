import { useState, createContext, useContext, useEffect } from 'react'
import { initCheckout } from '@/lib/payments'
import products from '@/products.json'

const defaultCart = {
  products: {},
}

export const CartContext = createContext()

export const useCartState = () => {
  const [cart, updateCart] = useState(defaultCart)

  useEffect(() => {
    const stateFromStorage = window.localStorage.getItem('yan_cart')
    const data = stateFromStorage && JSON.parse(stateFromStorage)
    if (data) {
      updateCart(data)
    }
  }, [])

  useEffect(() => {
    const data = JSON.stringify(cart)
    window.localStorage.setItem('yan_cart', data)
  }, [cart])

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

  const addToCart = (id, title) => {
    updateCart((prev) => {
      let cartState = { ...prev }
      if (cartState.products[id]) {
        cartState.products[id].quantity += 1
        cart
      } else {
        cartState.products[id] = {
          id,
          title,
          quantity: 1,
        }
      }
      return cartState
    })
  }

  const updateItem = (id, quantity) => {
    updateCart((prev) => {
      let cartState = { ...prev }

      if (quantity === 0) {
        delete cartState.products[id]
      } else {
        if (cartState.products[id]) {
          cartState.products[id].quantity = quantity
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

  return {
    cart,
    subtotal,
    totalItems,
    checkout,
    addToCart,
    updateItem,
  }
}

export function useCart() {
  const cart = useContext(CartContext)
  return cart
}
