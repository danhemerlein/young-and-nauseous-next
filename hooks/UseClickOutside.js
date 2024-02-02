import { useEffect } from 'react'

/**
 * Hook to fire event handler if user clicks outside of a ref element
 *
 * @param {Array} refs the element to to detect clicks outside of.
 * @param {Function} handler the function to fire when the ref is clicked ouside of
 */
const useOnClickOutside = (ref, handler, trigger = '') => {
  useEffect(
    () => {
      const listener = (event) => {
        const shouldExit = !ref?.current || ref?.current?.contains(event.target)

        if (trigger.length > 0 && !event.target.hasAttribute(trigger)) {
          handler(event)
          return
        }

        // Do nothing if clicking ref's element or descendent elements
        if (shouldExit) {
          return
        }
        handler(event)
      }

      document.addEventListener('click', listener)
      // do not add the focusin listener if trigger is passed in - custom focus trap will need to be implemented
      if (trigger) return
      document.addEventListener('focusin', listener)

      return () => {
        document.removeEventListener('click', listener)
        document.removeEventListener('focusin', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

export default useOnClickOutside
