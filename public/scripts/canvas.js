const canvas = document.querySelector('canvas')
const sandbox = new GlslCanvas(canvas)

const sizer = () => {
  const s = window.innerWidth * 0.4
  const dpi = window.devicePixelRatio

  canvas.width = s * dpi
  canvas.height = s * dpi
  canvas.style.width = s + 'px'
  canvas.style.height = s + 'px'
}

sizer()

window.addEventListener('resize', () => {
  sizer()
})

sandbox.load(frag)
sandbox.setUniform('scroll', 0)
sandbox.setUniform(
  'innerColors',
  [0.4824, 0.1333, 0.7608, 1.0],
  [0.1333, 0.7608, 0.4824, 1.0],
  [0.4824, 0.7882, 0.5647, 1.0],
)

sandbox.setUniform(
  'midColors',
  [0.2314, 0.7608, 0.9333, 1.0],
  [0.4824, 0.1333, 0.7608, 1.0],
  [0.6745, 0.4824, 0.7882, 1.0],
)

sandbox.setUniform(
  'outerColors',
  [0.7255, 0.6824, 0.6039, 1.0],
  [0.7608, 0.4824, 0.1333, 1.0],
  [0.7882, 0.6745, 0.4824, 1.0],
)

window.addEventListener('scroll', () => {
  const pixels = window.pageYOffset
  const wh = window.innerHeight

  sandbox.setUniform('scroll', pixels / wh)
})
