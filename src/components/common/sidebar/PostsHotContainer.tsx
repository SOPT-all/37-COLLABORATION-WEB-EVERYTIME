import { useGetPostsHot } from "@/apis/queries";

import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";
import SimplePostItemSkeleton from "./SimplePostItemSkeleton";

const PostsHotContainer = () => {
	const { data, isPending } = useGetPostsHot();
	const postsHot = data?.data ?? [];

	if (isPending) {
		return (
			<section className="flex flex-col">
				<SidebarHeader title="HOT 게시물" isMore={true} />
				<div className="flex flex-col">
					<SimplePostItemSkeleton />
					<SimplePostItemSkeleton />
					<SimplePostItemSkeleton />
					<SimplePostItemSkeleton />
				</div>
			</section>
		);
	}

	if (postsHot.length === 0) return null;

	return (
		<section className="flex flex-col">
			<SidebarHeader title="HOT 게시물" isMore={true} />
			<div className="flex flex-col">
				{postsHot.map((post) => (
					<SimplePostItem key={post.id} post={post} />
				))}
			</div>
		</section>
	);
};

export { PostsHotContainer };
