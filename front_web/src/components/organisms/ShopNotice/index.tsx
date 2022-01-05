import React from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import NoticeItem from "../../molecules/NoticeItem";

const ShopNotice = () => {
	// 일단 더미데이터 사용, 추후 업데이트 요청 필요(상세 필드 뭐뭐 있는지)
	const noticeArr = [
		[
			"2022-01-01",
			"제목",
			"코딩하다가 눈이 너무 침침할 땐 어떻게 해야 할까? 나는 인공눈물을 넣는 편인데 오늘은 안 가져와서 그냥 악으로 깡으로 버티는 중",
		],
		[
			"2022-01-01",
			"제목",
			"코딩하다가 눈이 너무 침침할 땐 어떻게 해야 할까? 나는 인공눈물을 넣는 편인데 오늘은 안 가져와서 그냥 악으로 깡으로 버티는 중",
		],
		[
			"2022-01-01",
			"제목",
			"코딩하다가 눈이 너무 침침할 땐 어떻게 해야 할까? 나는 인공눈물을 넣는 편인데 오늘은 안 가져와서 그냥 악으로 깡으로 버티는 중",
		],
		[
			"2022-01-01",
			"제목",
			"코딩하다가 눈이 너무 침침할 땐 어떻게 해야 할까? 나는 인공눈물을 넣는 편인데 오늘은 안 가져와서 그냥 악으로 깡으로 버티는 중",
		],
		[
			"2022-01-01",
			"제목",
			"코딩하다가 눈이 너무 침침할 땐 어떻게 해야 할까? 나는 인공눈물을 넣는 편인데 오늘은 안 가져와서 그냥 악으로 깡으로 버티는 중",
		],
		[
			"2022-01-01",
			"제목",
			"코딩하다가 눈이 너무 침침할 땐 어떻게 해야 할까? 나는 인공눈물을 넣는 편인데 오늘은 안 가져와서 그냥 악으로 깡으로 버티는 중",
		],
	];

	return (
		<Box type="colFlex" width="47.5%" height="100%" background="#ffffff">
			<Box type="rowFlex" width="100%" height="10%">
				<Text type="title">공지사항</Text>
				<Button>+</Button>
			</Box>
			<Box width="100%" height="90%" overflow="auto">
				{noticeArr.map((arr) => (
					<NoticeItem
						key={arr[0]}
						date={arr[0]}
						title={arr[1]}
						content={arr[2]}
					/>
				))}
			</Box>
		</Box>
	);
};

export default ShopNotice;
