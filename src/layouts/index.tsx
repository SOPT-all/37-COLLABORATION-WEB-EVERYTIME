import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex h-screen w-full flex-col justify-center">
			<Outlet />
		</div>
	);
};

export { Layout };
