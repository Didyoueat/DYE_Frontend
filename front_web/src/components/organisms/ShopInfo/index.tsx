import React from "react";
import useModal from "@hooks/useModal";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import Text from "@atoms/Text";
import ShopInfoForm from "@organisms/ShopInfoForm";
import Label from "@atoms/Label";

const getDayOff = (dayOff: boolean[]) => {
	const weekDays = ["월", "화", "수", "목", "금", "토", "일"];
	let days = "";
	for (let i = 0; i < dayOff.length; i++)
		if (dayOff[i]) days += weekDays[i] + ", ";
	return days.slice(0, -2);
};

const ShopInfo = (info: any) => {
	const shopInfo = info.info;
	const infoArr = [
		{
			value: "매장 이름",
			key: "businessName",
			data: shopInfo.businessName,
		},
		{ value: "대표 사진", key: "imageUrl", data: shopInfo.imageUrl },
		{ value: "매장 주소", key: "address", data: shopInfo.address },
		{
			value: "운영 시간",
			key: "officeHour",
			data: shopInfo.officeHour[0] + "~" + shopInfo.officeHour[1],
		},
		{ value: "휴무일", key: "dayOff", data: getDayOff(shopInfo.dayOff) },
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
		<Box
			type="colUpFlex"
			width="723px"
			height="885px"
			padding="44px"
			borderRadius="20px"
			// card padding과 margin값이 고정된다면 BoxTypes에 Type을 추가하는 게 더 좋을 것 같다!
		>
			<Box type="rowFlex" width="100%">
				<Text type="title">매장 정보</Text>
				<Button type="defaultRed" onClick={shop.handleModal}>
					수정
				</Button>
				{shop.showModal && (
					<ShopInfoForm
						width="1420px"
						height="872px"
						showModal={shop.showModal}
						handleModal={shop.handleModal}
						handleComplete={handleInfoComplete}
						cancelButton="취소"
						submitButton="저장"
						info={infoArr}
					/>
				)}
			</Box>
			<Box
				type="rowFlex"
				width="100%"
				height="700px"
				margin="28px 0px 0px 0px"
			>
				<Box
					type="colFlex"
					width="180px"
					height="684px"
					margin="16px 8px 0px 0px"
					flexAlign="flex-end"
				>
					{infoArr.map((info) => (
						<Label key={info.key} htmlFor={info.key}>
							{info.value}:
						</Label>
					))}
				</Box>
				<Box
					type="colFlex"
					width="520px"
					height="684px"
					margin="16px 8px 0px 0px"
					flexAlign="flex-start"
				>
					{infoArr.map((info) => (
						<Text key={info.key} type="bold">
							{info.data}
						</Text>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default ShopInfo;
