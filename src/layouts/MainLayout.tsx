import { Outlet } from "react-router-dom";

import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";
import { Sidebar } from "@/components/common/sidebar/SideBar";

const Layout = () => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Header />
			<main className="mx-auto my-[7rem] flex w-full max-w-[120rem] gap-[2rem] px-[7rem] py-[2rem]">
				<Sidebar />
				<div className="flex-1">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export { Layout };
