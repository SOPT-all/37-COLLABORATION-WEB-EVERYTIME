import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layouts";
import HomePage from "@/pages/MainPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			}, // Pages 추가
		],
	},
]);
