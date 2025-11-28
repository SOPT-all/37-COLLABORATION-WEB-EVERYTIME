import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";

import "@/index.css";
import "@/theme.css";

import { ErrorPage } from "@/pages/ErrorPage";
import { router } from "@/routes/appRoutes";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			gcTime: 1000 * 60 * 30,
			retry: 2,
			retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
		},
	},
});

const App = () => {
	return (
		<ErrorBoundary fallback={<ErrorPage />}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ErrorBoundary>
	);
};

export default App;
