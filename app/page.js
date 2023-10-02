import Image from 'next/image'
import products from '../products.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-left">
        {products.map((product) => {
          const { title, price, description, image, id } = product
          return (
            <li key={id}>
              <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={image} width="100" height="100" alt={title}></Image>
                <h2 className={`mb-3 text-2xl font-semibold`}>{title}</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {description} {price}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
