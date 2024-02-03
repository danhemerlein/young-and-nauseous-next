import Script from 'next/script'
const Record = () => {
  return (
    <div className="sticky top-0 z-0 flex h-screen items-center justify-center">
      <canvas id="RecordCanvas" className="h-full w-full"></canvas>

      <Script src="/scripts/glslcanvas.min.js" />
      <Script src="/scripts/include.js" />
      <Script src="/scripts/record-frag.js" />
      <Script src="/scripts/canvas.js" />
    </div>
  )
}

export default Record
