import { useGetPostsHot } from "@/apis/queries";

import { SimplePostItem } from "./SimplePostItem";
import SimplePostItemSkeleton from "./SimplePostItemSkeleton";

const PostsHotContainer = () => {
	const { data, isLoading, isError } = useGetPostsHot();

	const postsHot = data?.data ?? [];

	if (isLoading) {
		return (
			<div className="flex flex-col">
				<SimplePostItemSkeleton />
				<SimplePostItemSkeleton />
				<SimplePostItemSkeleton />
				<SimplePostItemSkeleton />
			</div>
		);
	}

	// 에러
	if (isError) {
		return <p className="text-[1.2rem] text-red-500">HOT 게시물을 불러오지 못했습니다.</p>;
	}

	// 게시글이 하나도 없을 경우 섹션 전체를 노출하지 않음
	if (postsHot.length === 0) {
		return null;
	}

	// 성공
	return (
		<div className="flex flex-col">
			{postsHot.map((post) => (
				<SimplePostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export { PostsHotContainer };
