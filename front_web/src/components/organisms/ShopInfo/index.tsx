import React from "react";
import useModal from "@hooks/useModal";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import Text from "@atoms/Text";
import LabelText from "@molecules/LabelText";
import Modal from "@molecules/Modal";
import ShopInfoForm from "@organisms/ShopInfoForm";

const ShopInfo = (info: any) => {
	const shopInfo = info.info;
	const infoArr = [
		// todo: 이거 따로 타입지정해둘 필요 있는듯,, or redux state에 선언
		{
			value: "매장 이름",
			key: "businessName",
			data: shopInfo.businessName,
		},
		{ value: "대표 사진", key: "imageUrl", data: shopInfo.imageUrl },
		{ value: "매장 주소", key: "address", data: shopInfo.address },
		{ value: "운영 시간", key: "officeHour", data: shopInfo.officeHour },
		{ value: "휴무일", key: "dayOff", data: shopInfo.dayOff },
		{
			value: "매장 연락처",
			key: "businessPhone",
			data: shopInfo.businessPhone,
		},
		{ value: "매장 소개글", key: "content", data: shopInfo.content },
		{ value: "원산지 정보", key: "origin", data: shopInfo.origin },
		{ value: "사장님 성함", key: "name", data: shopInfo.name },
		{
			value: "사업자등록번호",
			key: "businessNumber",
			data: shopInfo.businessNumber,
		},
		{ value: "사장님 연락처", key: "phone", data: shopInfo.phone },
	];

	const shop = useModal();
	const handleInfoComplete = () => {
		console.log("info submit");
		shop.handleModal();
		// 추후 추가
	};

	return (
		<Box type="colFlex" width="47.5%" height="100%" background="#ffffff">
			<Box type="rowFlex" width="100%" height="10%">
				<Text type="title">매장 정보</Text>
				<Button onClick={shop.handleModal}>수정</Button>
				{shop.showModal && (
					<Modal
						showModal={shop.showModal}
						handleModal={shop.handleModal}
						handleComplete={handleInfoComplete}
						cancelButton="취소"
						submitButton="저장"
					>
						<ShopInfoForm info={infoArr} />
					</Modal>
					// Modal을 이렇게 직접적으로 가져다 쓰기 vs 모달을 사용하는 컴포넌트를 만들어서 가져다 쓰기
					// 개인적으로는 상태 관리와 Props 내려주는 걸 상위에서 하는 게 맞는 것 같아서 이렇게 씀
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
					{infoArr.map((info) => (
						<LabelText
							key={info.value}
							label={info.value}
							id={info.key}
						>
							{info.data}
						</LabelText>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default ShopInfo;
