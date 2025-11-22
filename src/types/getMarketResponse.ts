import type { BaseResponse } from "./baseResponse";

export interface MarketDataType {
	id: number;
	bookImgUrl: string;
	title: string;
	price: number;
}

export interface GetMarketResponse extends BaseResponse {
	data: MarketDataType[];
}
