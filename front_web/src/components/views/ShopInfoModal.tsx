import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import DaumPostCode, { Address } from "react-daum-postcode";

// const ShopInfoModal = () => {
// 	const [shopName, setShopName] = useState<string>("");
// 	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
// 	const [imgUrl, setImgUrl] = useState(null);
// 	const [address, setAddress] = useState<string>("");
// 	const [showAddressSearch, setShowAddressSearch] = useState<boolean>(false);
// 	const [openTime, setOpenTime] = useState<string>("");
// 	const [closeTime, setCloseTime] = useState<string>("");
// 	const [dayOff, setDayOff] = useState<number>(0);
// 	const [phoneCode, setPhoneCode] = useState<string>("");

// 	const handleDayOff = (e: ChangeEvent<HTMLInputElement>) => {
// 		setDayOff(dayOff + Number(e.target.value));
// 	};

// 	const handleFileUpload = async () => {
// 		const formData = new FormData();
// 		if (selectedFile) {
// 			formData.append("dish", selectedFile[0]);
// 			await axios
// 				.post("/v0/users/create", formData, {
// 					headers: { "Content-Type": "multipart/form-data" },
// 				})
// 				.then((res) => {
// 					console.log(res.data);
// 					setImgUrl(res.data.location);
// 				});
// 		}
// 	};

// 	const handlePostCode = (data: Address) => {
// 		setAddress(data.address);
// 		setShowAddressSearch(false);
// 	};

// 	return (
// 		<form>
// 			<div>
// 				매장 이름:{" "}
// 				<input
// 					value={shopName}
// 					onChange={(e) => setShopName(e.target.value)}
// 				/>
// 			</div>
// 			<div>
// 				매장 대표사진:
// 				<input
// 					type="file"
// 					onChange={(e) => {
// 						if (e.target.files) setSelectedFile(e.target.files);
// 					}}
// 				/>
// 				<button onClick={handleFileUpload}>업로드</button>
// 				{/* {imgUrl && (
// 					<img
// 						src={imgUrl}
// 						alt="sample"
// 						style={{ width: "150px", height: "150px" }}
// 					/>
// 				)} */}
// 			</div>
// 			<div>
// 				매장 주소: {address && address}
// 				<button
// 					onClick={(e) => {
// 						e.preventDefault();
// 						setShowAddressSearch(true);
// 					}}
// 				>
// 					주소 검색
// 				</button>
// 				{showAddressSearch && (
// 					<DaumPostCode onComplete={handlePostCode} />
// 				)}
// 			</div>
// 			<div>배송 동네: {address && address}</div>
// 			<div>
// 				운영 시간:
// 				<select
// 					name="오픈"
// 					onChange={(e) => setOpenTime(e.target.value)}
// 				>
// 					<option value="09">08:00</option>
// 					<option value="09">09:00</option>
// 					<option value="10">10:00</option>
// 					<option value="11">11:00</option>
// 				</select>
// 				~
// 				<select
// 					name="마감"
// 					onChange={(e) => setCloseTime(e.target.value)}
// 				>
// 					<option value="09">08:00</option>
// 					<option value="09">09:00</option>
// 					<option value="10">10:00</option>
// 					<option value="11">11:00</option>
// 				</select>
// 				{openTime && openTime} {closeTime && closeTime}
// 			</div>
// 			<div>
// 				영업 요일: 월
// 				<input
// 					type="checkbox"
// 					name="월"
// 					value={64}
// 					onChange={handleDayOff}
// 				/>
// 				화
// 				<input
// 					type="checkbox"
// 					name="화"
// 					value={32}
// 					onChange={handleDayOff}
// 				/>
// 				수
// 				<input
// 					type="checkbox"
// 					name="수"
// 					value={16}
// 					onChange={handleDayOff}
// 				/>
// 				목
// 				<input
// 					type="checkbox"
// 					name="목"
// 					value={8}
// 					onChange={handleDayOff}
// 				/>
// 				금
// 				<input
// 					type="checkbox"
// 					name="금"
// 					value={4}
// 					onChange={handleDayOff}
// 				/>
// 				토
// 				<input
// 					type="checkbox"
// 					name="토"
// 					value={2}
// 					onChange={handleDayOff}
// 				/>
// 				일
// 				<input
// 					type="checkbox"
// 					name="일"
// 					value={1}
// 					onChange={handleDayOff}
// 				/>
// 				{dayOff && dayOff}
// 			</div>
// 			<div>
// 				매장 연락처:{" "}
// 				<select
// 					name="연락처"
// 					onChange={(e) => setPhoneCode(e.target.value)}
// 				>
// 					<option value="02">02</option>
// 					<option value="031">031</option>
// 					<option value="010">010</option>
// 					<option value="011">011</option>
// 				</select>
// 			</div>
// 		</form>
// 	);
// };

const ShopInfoModal = () => {
	const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
	const [shopInfo, setShopInfo] = useState({
		businessNumber: "",
		businessName: "",
		businessPhone: "",
		dayOff: "", // 2진수로 제공 0b0000001 == 일요일 휴무
		address: "",
		// latitude: "",
		// longitude: "",
		name: "",
		phone: "",
		origin: "",
		content: "",
		imageUrl: "",
		officeHour: {
			start: "",
			end: "",
		},
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setShopInfo({ ...shopInfo, [e.target.name]: e.target.value });
		console.log(e.target.name, e.target.value);
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
					setShopInfo({ ...shopInfo, imageUrl: res.data.location });
				});
		}
	};

	const handlePostCode = (data: Address) => {
		setShopInfo({ ...shopInfo, address: data.address });
		// setShowAddressSearch(false);
	};

	return (
		<form>
			<div className="businessName">
				매장 이름
				<input // 인풋 태그 나중에 styled-component로 스타일 넣기
					type="text"
					name="businessName"
					value={shopInfo.businessName}
					onChange={handleChange}
				/>
			</div>
			<div className="imageUrl">
				대표 사진
				<input
					type="file"
					name="imageUrl"
					// value={shopInfo.imageUrl}
					onChange={(e) => {
						if (e.target.files) setSelectedFile(e.target.files);
					}}
				/>
			</div>
			<div className="address">
				매장 주소
				<input type="text" name="address" value={shopInfo.address} />
				<button
					onClick={(e) => {
						e.preventDefault();
						<DaumPostCode onComplete={handlePostCode} />;
					}}
				>
					주소 검색
				</button>
			</div>
			<div className="address">
				매장 이름
				<input
					type="text"
					name="businessName"
					value={shopInfo.businessName}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default ShopInfoModal;
