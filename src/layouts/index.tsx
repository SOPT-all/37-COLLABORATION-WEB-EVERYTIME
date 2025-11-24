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
			<main className="mx-auto my-[7rem] flex w-full max-w-[120rem] gap-[2rem] px-[7rem] py-[2rem]">
				<Sidebar variant={sidebarVariant()} />
				<div className="flex-1">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export { Layout };
