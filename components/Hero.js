import dynamic from 'next/dynamic'

import UseWindowSize from '@/hooks/UseWindowSize'

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

const Hero = () => {
  let baroque
  let graphic

  let isMobile = UseWindowSize()

  let canvasWidth = isMobile ? 300 : 1200
  let canvasHeight = isMobile ? 300 : 600

  let textPositionX = isMobile ? 150 : 600
  let textPositionY = isMobile ? 150 : 300

  let textSize = isMobile ? 50 : 100

  const preload = (p5) => {
    baroque = p5.loadFont('/fonts/young-baroque.ttf')
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef)
    graphic = p5.createGraphics(canvasWidth, canvasHeight)
    graphic.fill('black')
    graphic.textSize(textSize)
    graphic.textAlign(p5.CENTER, p5.CENTER)
    graphic.textFont(baroque)
    graphic.text('young and nauseous', textPositionX, textPositionY)
  }

  const draw = (p5) => {
    const tileSize = 10

    for (let x = 0; x < 120; x = x + 1) {
      for (let y = 0; y < 60; y = y + 1) {
        const wave = 0.01
        const distortionX =
          p5.sin(p5.frameCount * wave + x * 0.5 + y * 0.3) * 10

        const distortionY = p5.sin(p5.frameCount * wave + x * 0.5 + y * 0.3) * 5

        const sx = x * tileSize + distortionX
        const sy = y * tileSize + distortionY
        const sw = tileSize
        const sh = tileSize

        const dx = x * tileSize
        const dy = y * tileSize
        const dw = tileSize
        const dh = tileSize

        p5.image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
      }
    }
  }

  return (
    <div className="hero flex h-screen items-center justify-center">
      {/* <Sketch preload={preload} setup={setup} draw={draw} /> */}
    </div>
  )
}

export default Hero
