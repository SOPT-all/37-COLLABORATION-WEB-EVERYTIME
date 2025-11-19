import { Outlet } from "react-router-dom";

import { Footer } from "@/components/common/footer/Footer";

const Layout = () => {
	return (
		<div className="flex h-screen w-full flex-col justify-center">
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
