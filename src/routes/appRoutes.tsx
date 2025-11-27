import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layouts/MainLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { MainPage } from "@/pages/MainPage";
import { SearchPage } from "@/pages/SearchPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: "search",
				element: <SearchPage />,
			},
		],
	},
	{
		path: "/error",
		element: <ErrorPage />,
	},
]);
