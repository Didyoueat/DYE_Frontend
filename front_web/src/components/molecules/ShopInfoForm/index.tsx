import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import { rootState } from "../../../redux";
import LabelInput from "../LabelInput";
import LabelText from "../LabelText";
import useShopData from "../../../hooks/useShopData";
import PostInput from "../PostInput";

const ShopInfoForm = () => {
	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
	const shopInfo = useSelector((state: rootState) => state.shopReducer.info);
	useShopData(shopInfo); // todo: 로그인할 때 실행해야 함

	const businessName = useInput(shopInfo.businessName);
	const imageUrl = useInput(shopInfo.imageUrl);
	const address = useInput(shopInfo.address);
	const officeHour = useInput(shopInfo.officeHour);
	const dayOff = useInput(shopInfo.dayOff);
	const businessPhone = useInput(shopInfo.businessPhone);
	const content = useInput(shopInfo.content);
	const origin = useInput(shopInfo.origin);
	const name = useInput(shopInfo.name);
	const businessNumber = useInput(shopInfo.businessNumber);
	const phone = useInput(shopInfo.phone);

	// todo: api 연동하는 부분 추후 수정
	// 파일 데이터 formData에 담아 넘긴 후, 응답으로 imageUrl을 받아 dispatch해야 하나?
	// 응답 받으면 모든 상태 dispatch해야 하는데 아직 redux 상태 정리가 안돼서 todo
	// const handleUpload = async () => {
	// 	const formData = new FormData();
	// 	if (selectedFile) {
	// 		formData.append("image", selectedFile[0]);
	// 		await axios
	// 			.post("/v0/users/create", formData, {
	// 				headers: { "Content-Type": "multipart/form-data" },
	// 			})
	// 			.then((res) => {
	// 				console.log(res.data);
	// 				imageUrl.setValue(res.data.location);
	// 			});
	// 	}
	// };

	return (
		<form>
			<LabelInput
				label="매장 이름"
				type="text"
				id="businessName"
				onChange={businessName.onChange}
				value={businessName.value}
			/>
			<LabelInput
				label="대표 사진"
				type="file"
				id="imageUrl"
				onChange={(e) => {
					if (e.target.files) setSelectedFile(e.target.files);
				}}
			/>
			<PostInput
				label="매장 주소"
				setValue={address.setValue}
				value={address.value}
			/>
			<LabelInput
				label="매장 소개글"
				type="text"
				id="content"
				onChange={content.onChange}
				value={content.value}
			/>
			<LabelInput
				label="원산지 정보"
				type="text"
				id="origin"
				onChange={origin.onChange}
				value={origin.value}
			/>
			<LabelText label="사장님 성함" id="name" onChange={name.onChange}>
				{name.value}
			</LabelText>
			<LabelText
				label="사업자등록번호"
				id="businessNumber"
				onChange={businessNumber.onChange}
			>
				{businessNumber.value}
			</LabelText>
		</form>
	);
};

export default ShopInfoForm;
