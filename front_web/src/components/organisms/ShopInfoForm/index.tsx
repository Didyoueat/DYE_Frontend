import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ModalProps } from "@interfaces/modal.interface";
import useInput from "@hooks/useInput";
import PhoneInput from "@molecules/PhoneInput";
import LabelInput from "@molecules/LabelInput";
import LabelText from "@molecules/LabelText";
import PostInput from "@molecules/PostInput";
import OfficeHour from "@molecules/OfficeHour";
import DayOff from "@molecules/DayOff";
import Modal from "@molecules/Modal";
import Text from "@atoms/Text";
import Box from "@atoms/Box";

export interface ShopInfoFormProps extends ModalProps {
	info: any;
}

const StyledForm = styled.form`
	width: 100%;
	height: 600px;
	background-color: #f5f4f2;
	font-size: 24px;
	margin-top: 40px;
`;

const ShopInfoForm = ({ info, ...props }: ShopInfoFormProps) => {
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

	// todo: api 연동하는 부분은 hooks에 따로 빼놓기
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
		<Modal {...props}>
			<Box
				type="colFlex"
				width="1280px"
				height="700px"
				margin="40px 70px"
				background="#f5f4f2"
				flexJustify="flex-start"
			>
				<Text type="title">매장 정보</Text>
				<StyledForm onChange={(e) => console.log(e.target)}>
					{/* todo: form 제출 시 사용할 메소드 작성해야 함 */}
					<Box
						width="100%"
						type="rowFlex"
						flexAlign="flex-start"
						background="#f5f4f2"
					>
						<Box width="590px" background="#f5f4f2">
							<LabelInput
								styleType="modal"
								label="매장 이름"
								type="text"
								id="businessName"
								onChange={businessName.onChange}
								value={businessName.value}
							/>
							<LabelInput
								styleType="modal"
								label="대표 사진"
								type="file"
								id="imageUrl"
								onChange={(e) => {
									if (e.target.files)
										setSelectedFile(e.target.files);
								}}
							/>
							<PostInput
								styleType="modalPost"
								label="매장 주소"
								setValue={address.setValue}
								value={address.value}
							/>
							<OfficeHour
								value={officeHour.value}
								setValue={officeHour.setValue}
							/>
							<DayOff
								styleType="modalCheck"
								value={dayOff.value}
								setValue={dayOff.setValue}
							/>
							<PhoneInput
								styleType="modalPhone"
								label="매장 연락처"
								id="businessPhone"
								value={businessPhone.value}
								setValue={businessPhone.setValue}
							/>
							{/* 반찬 list 불러와서 드롭다운 생성 */}
							<LabelInput
								styleType="modalText"
								label="매장 소개글"
								type="text"
								id="content"
								onChange={content.onChange}
								value={content.value}
							/>
						</Box>
						<Box width="590px" background="#f5f4f2">
							<LabelInput
								styleType="modalText"
								label="원산지 정보"
								type="text"
								id="origin"
								onChange={origin.onChange}
								value={origin.value}
							/>
							<LabelText
								styleType="modal"
								label="사장님 성함"
								id="name"
								onChange={name.onChange}
							>
								{name.value}
							</LabelText>
							<LabelText
								styleType="modal"
								label="사업자등록번호"
								id="businessNumber"
								onChange={businessNumber.onChange}
							>
								{businessNumber.value}
							</LabelText>
							<PhoneInput
								styleType="modalPhone"
								label="사장님 연락처"
								id="phone"
								value={phone.value}
								setValue={phone.setValue}
							/>
						</Box>
					</Box>
				</StyledForm>
			</Box>
		</Modal>
	);
};

export default ShopInfoForm;
