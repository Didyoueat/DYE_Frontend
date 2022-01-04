// 액션 타입 정의
const SHOP_NAME = "shop/SHOP_NAME";

// 액션 생성 함수 정의
export const changeShop = (shopname: string) => ({ type: SHOP_NAME, shopname });

type shopAction = ReturnType<typeof changeShop>;

type shopState = {
	shopname: string;
};

// 초기상태 정의
const initialState = {
	shopname: "",
};

// 리듀서 작성
export default function shopReducer(
	state: shopState = initialState,
	action: shopAction,
): shopState {
	switch (action.type) {
		case SHOP_NAME:
			return {
				...state,
				shopname: action.shopname,
			};
		default:
			return state;
	}
}
