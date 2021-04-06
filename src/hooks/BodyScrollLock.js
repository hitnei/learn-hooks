import { useLayoutEffect } from "react";

function useBodyScrollLock(initialValue) {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow

        document.body.style.overflow = 'hidden';

        return () => { /* onComponentUnmount */
            document.body.style.overflow = originalOverflow;
        }
    }, [] /* onComponentMount */);
}

export { useBodyScrollLock };
