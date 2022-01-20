import React, { useState } from "react";
import axios from "axios";
import useInput from "@hooks/useInput";
import LabelInput from "@molecules/LabelInput";
import LabelText from "@molecules/LabelText";
import PostInput from "@molecules/PostInput";
import OfficeHour from "@molecules/OfficeHour";
import DayOff from "@molecules/DayOff";
import PhoneInput from "@molecules/PhoneInput";

export interface ShopInfoFormProps {
	info: any;
}

const ShopInfoForm = ({ info }: ShopInfoFormProps) => {
	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
	const [
		businessName,
		imageUrl,
		address,
		officeHour,
		dayOff,
		businessPhone,
		content,
		origin,
		name,
		businessNumber,
		phone,
	] = info.map((item) => useInput(item.data));

	// todo: api 연동하는 부분 추후 수정
	// 파일 데이터 formData에 담아 넘긴 후, 응답으로 imageUrl을 받아 dispatch해야 하나?
	// todo: 응답 받으면 모든 상태 dispatch해야 하는데 아직 redux 상태 정리가 안돼있음
	// const handleUpload = async () => {
	// 	const formData = new FormData();
	// 	if (selectedFile) {
	// 		formData.append("image", selectedFile[0]);
	// 		await axios
	// 			.post("/v0/users/create", formData, { headers: { "Content-Type": "multipart/form-data" }, })
	// 			.then((res) => {
	// 				console.log(res.data);
	// 				imageUrl.setValue(res.data.location);
	// 			});
	// 	}
	// };

	return (
		<form onChange={(e) => console.log(e.target)}>
			{/* todo: form 제출 시 사용할 메소드 작성해야 함 */}
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
			<OfficeHour
				value={officeHour.value}
				setValue={officeHour.setValue}
			/>
			<DayOff value={dayOff.value} setValue={dayOff.setValue} />
			<PhoneInput
				label="매장 연락처"
				id="businessPhone"
				value={businessPhone.value}
				setValue={businessPhone.setValue}
			/>
			{/* 반찬 list 불러와서 드롭다운 생성 */}
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
			<PhoneInput
				label="사장님 연락처"
				id="phone"
				value={phone.value}
				setValue={phone.setValue}
			/>
		</form>
	);
};

export default ShopInfoForm;
