import { Sidebar } from "@/components/common/sidebar/SideBar";

const MainPage = () => {
	return (
		<div className="relative">
			<Sidebar showProfile={true} showMyHistory={true} />
		</div>
	);
};

export { MainPage };
