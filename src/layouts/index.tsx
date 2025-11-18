import { Outlet } from "react-router-dom";

import { Header } from "@/components/common/header/Header";

const Layout = () => {
	return (
		<div className="flex h-screen w-full flex-col justify-center">
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
