// 액션 타입 정의
const USER_NAME = "user/USER_NAME";

// 액션 생성 함수 정의
export const changeUser = (username: string) => {
	({ type: USER_NAME, username });
};

// 초기상태 정의
const initialState = {
	username: "",
};

// 리듀서 작성
export default function dispatchUser(
	state = initialState,
	action: { type: string; username: string }
) {
	switch (action.type) {
		case USER_NAME:
			return {
				...state,
				username: action.username,
			};
		default:
			return state;
	}
}
