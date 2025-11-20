import { Outlet } from "react-router-dom";

import { Footer } from "@/components/common/footer/Footer";
import { Header } from "@/components/common/header/Header";

const Layout = () => {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export { Layout };
