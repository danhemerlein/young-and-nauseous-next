'use client'
import cn from 'classnames'

const Button = ({ handler, text, classes, playButton, noHoverState }) => {
  return (
    <button
      className={cn(
        `bg-reverse text-ink border-solid border-ink whitespace-nowrap border px-2 py-1 transition-cubic-bezier transition-colors duraction-500 text-sm ${classes}`,
        noHoverState ? '' : ' hover:bg-ink hover:text-reverse '
      )}
      onClick={handler}
    >
      {text} {playButton && <span>⏵</span>}
    </button>
  )
}

export default Button
