import { Suspense, useEffect, useState, type ReactNode } from "react";

interface DelayedSuspenseProps {
	children: ReactNode;
	fallback: ReactNode;
	delay: number;
}

const DelayedSuspense = ({ children, fallback, delay = 200 }: DelayedSuspenseProps) => {
	const [showFallback, setShowFallback] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowFallback(true);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	return <Suspense fallback={showFallback ? fallback : null}>{children}</Suspense>;
};

export { DelayedSuspense };
