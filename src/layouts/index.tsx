import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/header/Header";
import { Footer } from "@/components/common/footer/Footer";

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

export default Layout;
