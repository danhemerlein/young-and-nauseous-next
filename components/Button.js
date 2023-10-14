'use client'
import cn from 'classnames'

const Button = ({ handler, text, classes, playButton, noHoverState }) => {
  return (
    <button
      className={cn(
        `bg-reverse text-ink border-solid border-ink whitespace-nowrap border-2 px-4 py-2 transition-cubic-bezier transition-colors duraction-500 ${classes}`,
        noHoverState ? '' : ' hover:bg-ink hover:text-reverse '
      )}
      onClick={handler}
    >
      {text} {playButton && <span>⏵</span>}
    </button>
  )
}

export default Button
