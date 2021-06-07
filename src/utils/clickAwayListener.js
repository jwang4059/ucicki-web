import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useClickAwayListener = (ref, open, cb) => {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				cb();
			}
		};

		if (open) {
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [ref, open, cb]);
};
