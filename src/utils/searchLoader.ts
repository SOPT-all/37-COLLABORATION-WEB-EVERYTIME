import type { LoaderFunctionArgs } from "react-router-dom";

const searchLoader = ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const keyword = url.searchParams.get("keyword") ?? "";

	// keyword가 없거나 공백이면 404 반환
	if (!keyword.trim()) {
		throw new Response("Not Found", { status: 404 });
	}

	return null;
};

export { searchLoader };
