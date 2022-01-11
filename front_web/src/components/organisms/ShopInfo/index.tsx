import React from "react";
import { useSelector } from "react-redux";
import useModal from "../../../hooks/useModal";
import { rootState } from "../../../redux";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import LabelText from "../../molecules/LabelText";
import Modal from "../../molecules/Modal";
import ShopInfoForm from "../ShopInfoForm";

const ShopInfo = () => {
	// 일단 더미데이터 사용
	const shop = useModal();
	const shopInfo = useSelector((state: rootState) => state.shopReducer.info);
	const infoArr = [
		// todo: 이거 따로 타입지정해둘 필요 있는듯,, or redux state 자체에 선언
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
		<Box type="colFlex" width="47.5%" height="100%" background="#ffffff">
			<Box type="rowFlex" width="100%" height="10%">
				<Text type="title">매장 정보</Text>
				{/* todo: button과 modal 묶어 컴포넌트 하나로 만들기 */}
				<Button onClick={shop.handleModal}>수정</Button>
				{shop.showModal && (
					<Modal
						showModal={shop.showModal}
						handleModal={shop.handleModal}
					>
						<ShopInfoForm />
					</Modal>
				)}
			</Box>
			<Box
				type="rowFlex"
				width="100%"
				height="90%"
				flexAlign="flex-start"
			>
				<img src="" alt="대충 대표 사진" width="20%" />
				<Box type="colFlex" width="80%" flexJustify="flex-start">
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

export default ShopInfo;
