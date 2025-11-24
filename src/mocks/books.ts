export interface BookProps {
	id: number;
	bookImgUrl: string;
	title: string;
	price: number;
}

export const MOCK_BOOKS: BookProps[] = [
	{
		id: 1,
		bookImgUrl: "https://via.placeholder.com/150",
		title: "테스트 책",
		price: 8000,
	},
	{
		id: 2,
		bookImgUrl: "https://via.placeholder.com/150",
		title: "테스트 책 2",
		price: 10000,
	},
	{
		id: 3,
		bookImgUrl: "https://via.placeholder.com/150",
		title: "테스트 책 3",
		price: 12000,
	},
	{
		id: 4,
		bookImgUrl: "https://via.placeholder.com/150",
		title: "테스트 책 4",
		price: 14000,
	},
	{
		id: 5,
		bookImgUrl: "https://via.placeholder.com/150",
		title: "테스트 책 5",
		price: 16000,
	},
];
