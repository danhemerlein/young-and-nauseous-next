import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth < 768 : false
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
  }, [isClient])

  return isMobile
}

export default useWindowSize
