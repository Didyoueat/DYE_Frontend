// 액션 타입 정의
const PAGE_NAME = "page/PAGE_NAME" as const;
const PAGE_SUB = "page/PAGE_SUB" as const;

// 액션 생성 함수 정의
export const changePage = (pagename: string) => ({ type: PAGE_NAME, pagename });
export const changeSub = (subpage: string) => ({ type: PAGE_SUB, subpage });

type pageAction = ReturnType<typeof changePage> | ReturnType<typeof changeSub>;

type pageState = {
	pagename: string;
	subpage: string;
};

// 초기상태 정의
const initialState = {
	pagename: "dashboard",
	subpage: "main",
};

// 리듀서 작성
export default function pageReducer(
	state: pageState = initialState,
	action: pageAction,
): pageState {
	switch (action.type) {
		case PAGE_NAME:
			return {
				...state,
				pagename: action.pagename,
			};
		case PAGE_SUB:
			return {
				...state,
				subpage: action.subpage,
			};
		default:
			return state;
	}
}
