// 액션 타입 정의
const PAGE_NAME = "page/PAGE_NAME";
const PAGE_DEPTH = "page/PAGE_DEPTH";

// 액션 생성 함수 정의
export const changePage = (pagename: string) => {
	({ type: PAGE_NAME, pagename });
};

export const changeDepth = (depth: string) => {
	({ type: PAGE_DEPTH, depth });
};

// 초기상태 정의
const initialState = {
	pagename: "calendar",
	depth: "",
};

// 리듀서 작성
export default function dispatchPage(
	state = initialState,
	action: { type: string; pagename: string; depth: string }
) {
	switch (action.type) {
		case PAGE_NAME:
			return {
				...state,
				pagename: action.pagename,
			};
		case PAGE_DEPTH:
			return {
				...state,
				depth: action.depth,
			};
		default:
			return state;
	}
}
