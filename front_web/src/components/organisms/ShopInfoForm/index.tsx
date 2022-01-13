import React, { useState } from "react";
import axios from "axios";
import useInput from "../../../hooks/useInput";
import LabelInput from "../../molecules/LabelInput";
import LabelText from "../../molecules/LabelText";
import PostInput from "../../molecules/PostInput";
import Box from "../../atoms/Box";
import Label from "../../atoms/Label";
import DropDown from "../../molecules/DropDown";
import Input from "../../atoms/Input";

export interface ShopInfoFormProps {
	info: any;
}

const ShopInfoForm = ({ info }: ShopInfoFormProps) => {
	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
	const phoneFront = ["02", "010", "011"];

	const businessName = useInput(info[0][2]);
	const imageUrl = useInput(info[1][2]);
	const address = useInput(info[2][2]);
	const officeHour = useInput(info[3][2]);
	const dayOff = useInput(info[4][2]);
	const businessPhone = useInput(info[5][2]);
	const content = useInput(info[6][2]);
	const origin = useInput(info[7][2]);
	const name = useInput(info[8][2]);
	const businessNumber = useInput(info[9][2]);
	const phone = useInput(info[10][2]);

	// todo: api 연동하는 부분 추후 수정
	// 파일 데이터 formData에 담아 넘긴 후, 응답으로 imageUrl을 받아 dispatch해야 하나?
	// 응답 받으면 모든 상태 dispatch해야 하는데 아직 redux 상태 정리가 안돼서 todo
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

			{/* 최적화 해야 할 부분 */}
			<Box type="rowFlex">
				<Label htmlFor="officeHour">운영 시간</Label>
				<DropDown items={["09:00", "10:00", "11:00"]} />~
				<DropDown items={["18:00", "19:00", "20:00"]} />
			</Box>
			{/* 영업 요일 처리하는 훅이나 컴포넌트 따로 만들기*/}
			<Box type="rowFlex">
				<Label htmlFor="dayOff">휴무일</Label>
			</Box>
			<Box type="rowFlex">
				<Label htmlFor="businessPhone">매장 연락처</Label>
				<DropDown items={["02", "010", "011"]} />-
				<Input type="text" />-
				<Input type="text" />
			</Box>
			{/* 반찬 list 불러와서 드롭다운 생성 */}
			{/* 최적화 해야 할 부분 */}

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
			<Box type="rowFlex">
				<Label htmlFor="phone">사장님 연락처</Label>
				<DropDown items={["02", "010", "011"]} />-
				<Input type="text" />-
				<Input type="text" />
			</Box>
		</form>
	);
};

export default ShopInfoForm;
