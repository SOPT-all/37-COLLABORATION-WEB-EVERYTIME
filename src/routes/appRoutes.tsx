import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layouts/MainLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { MainPage } from "@/pages/MainPage";
import { SearchPage } from "@/pages/SearchPage";
import { searchLoader } from "@/utils/searchLoader";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: "search",
				element: <SearchPage />,
				loader: searchLoader,
			},
		],
	},
	{
		path: "*",
		lazy: async () => {
			const { ErrorPage } = await import("@/pages/ErrorPage");
			return { Component: ErrorPage };
		},
	},
]);
