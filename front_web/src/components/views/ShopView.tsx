import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import Modal from "../pages/Modal";
import { useSelector } from "react-redux";
import { rootState } from "../../modules";
import { ShowMainStyle } from "./ShopViewStyle";
import { ModalWrapper } from "../pages/ModalStyle";

const ShopView = () => {
	const subpageName = useSelector(
		(state: rootState) => state.pageReducer.subpage
	);

	let subpage = <div></div>;
	if (subpageName === "main") subpage = <ShopMain></ShopMain>;
	else if (subpageName === "edit") subpage = <ShopEdit></ShopEdit>;

	return <>{subpage}</>;
};

const ShopMain = () => {
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
	const [showNoticeModal, setShowNoticeModal] = useState<boolean>(false);

	const handleInfoModal = () => {
		setShowInfoModal(!showInfoModal);
	};
	const handleNoticeModal = () => {
		setShowNoticeModal(!showNoticeModal);
	};

	return (
		<ShowMainStyle>
			<div className="shopInfo">
				<h2>매장 정보</h2>
				<button onClick={handleInfoModal}>수정</button>
				{showInfoModal && (
					<ModalWrapper>
						<Modal
							openModal={showInfoModal}
							closeModal={handleInfoModal}
						></Modal>
					</ModalWrapper>
				)}
			</div>
			<div className="shopNotice">
				<h2>공지사항</h2>
				<button onClick={handleNoticeModal}>+</button>
				{showNoticeModal && (
					<ModalWrapper>
						<Modal
							openModal={showNoticeModal}
							closeModal={handleNoticeModal}
						></Modal>
					</ModalWrapper>
				)}
			</div>
		</ShowMainStyle>
	);
};

const ShopEdit = () => {
	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
	const [imgUrl, setImgUrl] = useState(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) setSelectedFile(e.target.files);
	};

	const handleFileUpload = async () => {
		const formData = new FormData();
		if (selectedFile) {
			formData.append("dish", selectedFile[0]);
			await axios
				.post("/v0/users/create", formData, {
					headers: { "Content-Type": "multipart/form-data" },
				})
				.then((res) => {
					console.log(res.data);
					setImgUrl(res.data.location);
				});
		}
	};

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleFileUpload}>업로드</button>
			{imgUrl && (
				<img
					src={imgUrl}
					alt="sample"
					style={{ width: "150px", height: "150px" }}
				/>
			)}
		</div>
	);
};

export default ShopView;
