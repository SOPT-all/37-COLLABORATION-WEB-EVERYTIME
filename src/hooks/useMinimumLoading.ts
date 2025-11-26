import { useEffect, useRef, useState } from "react";

export const useMinimumLoading = (isPending: boolean, delayMs: number = 200) => {
	const [shouldShowLoading, setShouldShowLoading] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const startTimeRef = useRef<number | null>(null);

	useEffect(() => {
		if (isPending) {
			startTimeRef.current = Date.now();
			timeoutRef.current = setTimeout(() => {
				setShouldShowLoading(true);
			}, delayMs);
		} else {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}

			if (startTimeRef.current) {
				const elapsed = Date.now() - startTimeRef.current;
				if (elapsed < delayMs) {
					setShouldShowLoading(false);
				} else {
					setShouldShowLoading(false);
				}
				startTimeRef.current = null;
			} else {
				setShouldShowLoading(false);
			}
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [isPending, delayMs]);

	return shouldShowLoading;
};
