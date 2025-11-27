import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { SearchPage } from "@/pages/SearchPage";

const SearchRoute = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get("keyword") ?? "";

	if (!keyword.trim()) {
		navigate("/error", { replace: true });
	}
	return <SearchPage />;
};

export { SearchRoute };
