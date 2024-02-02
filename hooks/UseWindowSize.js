import { useEffect, useState } from 'react'

const UseWindowSize = () => {
  const isClient = typeof window === 'object'

  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth < 768 : false,
  )

  const checkWindowSize = () => {
    setIsMobile(isClient ? window.innerWidth < 768 : false)
  }

  useEffect(() => {
    if (!isClient) {
      return
    }

    window.addEventListener('resize', checkWindowSize)

    return () => {
      window.removeEventListener('resize', checkWindowSize)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient])

  return isMobile
}

export default UseWindowSize
