import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import { Sidebar } from "@/components/common/sidebar/SideBar";

const Layout = () => {
	const location = useLocation();

	const sidebarVariant = () => {
		if (location.pathname === "/search") {
			return "search";
		}
		return "main";
	};

	return (
		<div className="flex min-h-screen w-full flex-col">
			<Header />
			<main className="m-[7rem] flex-1">
				<Sidebar variant={sidebarVariant()} />
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export { Layout };
