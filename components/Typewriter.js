import { useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'

const Typewriter = ({ text, delay, className }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text, inView])

  return (
    <InView
      as="span"
      onChange={(inView, entry) => setInView(inView)}
      className={`block ${className}`}
    >
      <span>{currentText}</span>
    </InView>
  )
}

export default Typewriter
