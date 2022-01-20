import { ShopInfo } from "@interfaces/shop.interface";

// 액션 타입 정의
const SHOP_ID = "shop/SHOP_ID" as const;
const SHOP_INFO = "shop/SHOP_INFO" as const;

// 액션 생성 함수 정의
export const changeShopId = (shopId: number) => ({ type: SHOP_ID, shopId });
export const changeShopInfo = (shopInfo: Record<string, unknown>) => ({
	type: SHOP_INFO,
	shopInfo,
});

type shopAction =
	| ReturnType<typeof changeShopId>
	| ReturnType<typeof changeShopInfo>;

type shopState = ShopInfo;

// 초기상태 정의
const initialState = {
	shopId: 1,
	businessNumber: ["17", "1234", "1234"],
	businessName: "동찬이네",
	businessPhone: ["02", "123", "1234"],
	dayOff: 9,
	address: "서울시 서초구 강남대로 327, 대륭서초타워 4층",
	latitude: 37.123,
	longitude: 127.123,
	name: "김성수",
	phone: ["010", "1234", "1234"],
	origin: "김치: 국내산, 돼지고기: 국내산, 소고기: 호주산, ...",
	content: "안녕하세요 동찬이네입니다",
	imageUrl: "S3 이미지 url",
	officeHour: ["09:00", "18:00"],
	temporaryDayStart: "2021-12-07T09:36:14.076Z",
	temporaryDayEnd: "2021-12-15T09:36:14.076Z",
	createdAt: "2021-12-01T09:36:14.076Z",
	updatedAt: "2021-12-07T09:36:14.076Z",
	dishes: [
		{
			dishId: 123,
			shopId: 1,
			main: true,
			thumbnail: true,
			title: "가지 볶음",
			content: "말랑말랑한 가지볶음!",
			price: 3000,
			count: 30,
			weight: 150,
			imageUrl: "S3 이미지 url",
			createdAt: "2021-12-01T09:36:14.076Z",
			updatedAt: "2021-12-01T09:36:14.076Z",
		},
	],
};

// 리듀서 작성
export default function shopReducer(
	state: shopState = initialState,
	action: shopAction,
): shopState {
	switch (action.type) {
		case SHOP_ID:
			return {
				...state,
				shopId: action.shopId,
			};
		case SHOP_INFO:
			return {
				...state,
				info: action.shopInfo,
			};
		default:
			return state;
	}
}
