import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import ModalContainer from "../pages/Modal";
import { useSelector } from "react-redux";
import { rootState } from "../../modules";
import { ShowMainStyle } from "./ShopViewStyle";

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
	return (
		<ShowMainStyle>
			<div className="shopInfo">
				<ModalContainer></ModalContainer>
			</div>
			<div className="shopNotice"></div>
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
