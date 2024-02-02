'use client'

import { useModal } from '@/hooks/useModal'

const ProductCard = ({ product, index, session }) => {
  const { title, bpm, isMoodRing } = product
  const { toggleModal } = useModal()

  return (
    <li className="text-ink flex flex-col justify-center items-center h-screen font-lack gap-4 z-10">
      <h2 className="font-baroque lowercase text-[124px] relative z-10">
        {title}

        <sup className="text-sm font-lack absolute right-[-45px] top-0 border-ink border rounded-full border-solid p-4 h-[30px] w-[30px] flex items-center justify-center">
          {index + 1}
        </sup>
      </h2>
      <p>{bpm}bpm</p>
      <a className="cursor-pointer z-10">free download</a>
      {/* need to avoid a nested ternary here */}
      {isMoodRing ? (
        !session ? (
          <button onClick={toggleModal} className="text-sm z-10">
            log in to create a mood ring
          </button>
        ) : (
          <p className="text-sm z-10">create a mood ring</p>
        )
      ) : null}
    </li>
  )
}

export default ProductCard
