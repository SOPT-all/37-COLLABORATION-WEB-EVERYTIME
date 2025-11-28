import { useGetPostsHot } from "@/apis/queries";

import { SimplePostItem } from "./SimplePostItem";

const PostsHotContainer = () => {
	const { data } = useGetPostsHot();
	const postsHot = data?.data ?? [];

	if (postsHot.length === 0) return null;

	return (
		<section className="flex flex-col">
			{postsHot.map((post) => (
				<SimplePostItem key={post.id} post={post} />
			))}
		</section>
	);
};

export { PostsHotContainer };
