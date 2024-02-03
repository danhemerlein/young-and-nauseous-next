'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ScriptLoaded = () => {
  const pathname = usePathname()
  useEffect(() => {
    const scriptUrls = ['/scripts/glslcanvas.min.js', '/scripts/canvas.js']

    // Create a promise for each script loading operation
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    loadScript('/scripts/glslcanvas.min.js')
      .then(() => {
        return Promise.all(
          scriptUrls
            .filter((url) => url !== '/scripts/glslcanvas.min.js')
            .map((url) => loadScript(url)),
        )
      })
      .catch((error) => {
        console.error('Error loading scripts:', error)
      })
  }, [pathname])

  return null
}

export default ScriptLoaded
