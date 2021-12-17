import React, { useState } from "react";
import Modal from "../pages/Modal";
import { useSelector } from "react-redux";
import { rootState } from "../../modules";
import { ShowMainStyle } from "./ShopViewStyle";
import { ModalWrapper } from "../pages/ModalStyle";
import ShopInfoModal from "./ShopInfoModal";

const ShopView = () => {
	const subpageName = useSelector(
		(state: rootState) => state.pageReducer.subpage
	);

	let subpage = <div></div>;
	if (subpageName === "main") subpage = <ShopMain></ShopMain>;

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
						>
							<ShopInfoModal></ShopInfoModal>
						</Modal>
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
						>
							{<div>이것이 바로 공지사항</div>}
						</Modal>
					</ModalWrapper>
				)}
			</div>
		</ShowMainStyle>
	);
};

export default ShopView;
