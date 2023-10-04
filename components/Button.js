'use client'

const Button = ({ handler, text, classes }) => {
  return (
    <button
      className={`bg-reverse text-ink border-solid border-ink border-2 px-4 py-2 hover:bg-ink hover:text-reverse transition-cubic-bezier transition-colors duraction-500 ${classes}`}
      onClick={handler}
    >
      {text}
    </button>
  )
}

export default Button
