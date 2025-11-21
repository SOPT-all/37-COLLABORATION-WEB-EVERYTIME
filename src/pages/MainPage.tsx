import { Sidebar } from "@/components/common/sidebar/SideBar";

const MainPage = () => {
	return (
		<div className="display justify-cols flex gap-[2.4rem] py-[3.2rem]">
			<Sidebar variant="main" />
			<Sidebar variant="search" />
		</div>
	);
};

export { MainPage };
