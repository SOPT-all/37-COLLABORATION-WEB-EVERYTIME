import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layouts/MainLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { MainPage } from "@/pages/MainPage";
import { SearchRoute } from "@/routes/searchRoute";

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
				element: <SearchRoute />,
			},
		],
	},
	{
		path: "/error",
		element: <ErrorPage />,
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);
