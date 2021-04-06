import { useEffect } from 'react'

function useOnClickOutside(ref, handle) {
    useEffect(() => {
        const listeners = ((event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handle()
        })

        document.addEventListener('mousedown', listeners)
        document.addEventListener('touchstart', listeners)

        return () => {
            document.removeEventListener('mousedown', listeners)
            document.removeEventListener('touchstart', listeners)
        }
    })
}

export { useOnClickOutside }