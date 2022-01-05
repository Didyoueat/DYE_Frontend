import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../../redux";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import LabelText from "../../molecules/LabelText";

const ShopNotice = () => {
	// 일단 더미데이터 사용
	const shopInfo = useSelector((state: rootState) => state.shopReducer.info);
	const infoArr = [
		["매장 이름:", "businessName", shopInfo.businessName],
		["매장 주소:", "address", shopInfo.address],
		["배송 동네:", "deliveryArea", "무슨무슨동"],
		["운영 시간:", "officeHour", shopInfo.officeHour],
		["휴무일:", "dayOff", "월, 금"],
		["매장 연락처:", "businessPhone", shopInfo.businessPhone],
		["매장 소개글:", "content", shopInfo.content],
		["원산지 정보:", "origin", shopInfo.origin],
		["사장님 성함:", "name", shopInfo.name],
		["사장님 연락처:", "phone", shopInfo.phone],
		["사업자등록번호:", "businessNumber", shopInfo.businessNumber],
	];

	return (
		<Box type="colFlex" width="45%" height="100%" background="#ffffff">
			<Box type="rowFlex">
				<Text type="title">매장 정보</Text>
				<Button>수정</Button>
			</Box>
			<Box type="rowFlex">
				<img src="" alt="대충 대표 사진" />
				<Box type="colFlex" flexJustify="flex-start">
					{infoArr.map((arr) => (
						<LabelText
							key={String(arr[1])}
							label={arr[0]}
							id={arr[1]}
						>
							{arr[2]}
						</LabelText>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default ShopNotice;
