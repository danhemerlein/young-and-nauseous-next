'use client'

const Record = () => {
  return (
    <div className="sticky top-0 z-0 flex h-screen items-center justify-center ">
      {/* min height and with specified to avoid large layout shifts */}
      <canvas
        id="RecordCanvas"
        className="min-h-[200px] min-w-[200px] lg:min-h-[690px] lg:min-w-[690px]"
      ></canvas>
    </div>
  )
}

export default Record
