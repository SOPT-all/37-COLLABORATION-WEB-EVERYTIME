import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layouts";
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
]);
