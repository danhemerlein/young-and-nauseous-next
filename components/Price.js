import React from 'react'

const Price = ({ price, classes }) => {
  return <p className={`w-full text-center ${classes}`}>${price.toFixed(2)}</p>
}

export default Price
