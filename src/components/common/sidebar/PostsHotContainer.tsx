import { useGetPostsHot } from "@/apis/queries";

import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";
import SimplePostItemSkeleton from "./SimplePostItemSkeleton";

const PostsHotContainer = () => {
	const { data, isLoading, isError } = useGetPostsHot();

	const postsHot = data?.data ?? [];

	// 게시글이 하나도 없을 경우 섹션 전체를 노출하지 않음
	if (!isLoading && !isError && postsHot.length === 0) {
		return null;
	}

	return (
		<section className="flex flex-col">
			<SidebarHeader title={"HOT 게시물"} isMore={true} />

			{/* 로딩 */}
			{isLoading && (
				<div className="flex flex-col">
					<SimplePostItemSkeleton />
					<SimplePostItemSkeleton />
					<SimplePostItemSkeleton />
					<SimplePostItemSkeleton />
				</div>
			)}

			{/* 에러 */}
			{!isLoading && isError && <p className="text-[1.2rem] text-red-500">HOT 게시물을 불러오지 못했습니다.</p>}

			{/* 데이터 성공 */}
			{!isLoading && !isError && postsHot.length > 0 && (
				<div className="flex flex-col">
					{postsHot.map((post) => (
						<SimplePostItem key={post.id} post={post} />
					))}
				</div>
			)}
		</section>
	);
};

export { PostsHotContainer };
