const Price = ({ price, classes }) => {
  return (
    <p className={`w-full text-center ${classes}`}>
      {price < 0 ? `$${price.toFixed(0)}` : 'free'}
    </p>
  )
}

export default Price
