import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/layouts";
import { MainPage } from "@/pages/MainPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			}, // Pages 추가
		],
	},
]);
