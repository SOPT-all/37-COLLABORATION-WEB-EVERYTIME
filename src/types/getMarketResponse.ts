import type { BaseResponse } from "./api";

export interface MarketDataType {
	id: number;
	bookImgUrl: string;
	title: string;
	price: number;
}

export type GetMarketResponse = BaseResponse<MarketDataType[]>;
