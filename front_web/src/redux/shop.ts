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

type shopState = {
	shopId: number;
	info: Record<string, any>; // todo: 데이터 타입 지정

	// shopId: number;
	// businessNumber: string;
	// businessName: string;
	// businessPhone: string;
	// dayOff: string; // "월금"
	// address: string;
	// latitude: number;
	// longitude: number;
	// name: string;
	// phone: string;
	// origin: string;
	// content: string;
	// imageUrl: string;
	// officeHour: string; // "09:00-18:00"
	// temporaryDayStart: Date; // type: Date, allow null
	// temporaryDayEnd: Date; // type: Date, allow null
	// createdAt: Date;
	// updatedAt: Date;
	// dishes: {
	// 	dishId: number;
	// 	shopId: number;
	// 	main: boolean;
	// 	thumbnail: boolean;
	// 	title: string;
	// 	content: string;
	// 	price: number;
	// 	count: number;
	// 	weight: number;
	// 	imageUrl: string;
	// 	createdAt: Date;
	// 	updatedAt: Date;
	// }[];
};

// 초기상태 정의
const initialState = {
	shopId: NaN,

	// 임시로 쓸 더미데이터 ! 파싱하는 훅 만들어서 로그인할 때 데이터 dispatch 할 수 있게 만들자
	info: {
		shopId: 1, // type: int
		businessNumber: "17-1234-1234", // type: string, length: 30
		businessName: "동찬이네", // type: string, length: 50
		businessPhone: "02-123-1234", // type: string, length: 20
		dayOff: 9, // type: int, 9 => 0b00001001 목요일, 일요일 휴무
		address: "서울시 서초구 강남대로 327, 대륭서초타워 4층", // type: string, length: 100
		latitude: 37.123, // type: float
		longitude: 127.123, // type: float
		name: "김성수", // type: string, length: 10
		phone: "010-1234-1234", // type: string, length: 20, allow null
		origin: "김치: 국내산, 돼지고기: 국내산, 소고기: 호주산, ...", // type: string, length: 300, allow null
		content: "안녕하세요 동찬이네입니다", // type: string, length: 300, allow null
		imageUrl: "S3 이미지 url", // type: string, length: 500, allow null
		officeHour: "09:00-18:00", // type: string, length: 11, allow null, [ :, - 기준으로 알아서 파싱해서 사용할 것]
		temporaryDayStart: "2021-12-07T09:36:14.076Z", // type: Date, allow null
		temporaryDayEnd: "2021-12-15T09:36:14.076Z", // type: Date, allow null
		createdAt: "2021-12-01T09:36:14.076Z", // type: Date
		updatedAt: "2021-12-07T09:36:14.076Z", // type: Date
		dishes: [
			{
				dishId: 123, // type: int
				shopId: 1, // type: int
				main: true, // type: boolean
				thumbnail: true, // type: boolean
				title: "가지 볶음", // type: string, length: 30
				content: "말랑말랑한 가지볶음!", // type: string, length: 150, allow null
				price: 3000, // type: int
				count: 30, // type: int
				weight: 150, // type: int
				imageUrl: "S3 이미지 url", // type: string, length: 500, allow null
				createdAt: "2021-12-01T09:36:14.076Z", // type: Date
				updatedAt: "2021-12-01T09:36:14.076Z", // type: Date
			},
		],
	},
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
