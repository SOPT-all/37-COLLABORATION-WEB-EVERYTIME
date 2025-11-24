import type { ApiResponse } from "./api";

export interface MarketDataType {
	id: number;
	bookImgUrl: string;
	title: string;
	price: number;
}

export type GetMarketResponse = ApiResponse<MarketDataType[]>;
