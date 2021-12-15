import React, { useState } from "react";
import { ModalWrapper } from "./ModalStyle";

type Props = {
	openModal: boolean;
	closeModal: () => void;
};

export const ModalContainer = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(!showModal);
	};

	return (
		<ModalWrapper>
			<button onClick={openModal}>Click</button>
			<Modal openModal={showModal} closeModal={closeModal}></Modal>
		</ModalWrapper>
	);
};

export const Modal = (props: Props) => {
	const { openModal, closeModal } = props;

	return (
		<div className={openModal ? "modalActive" : ""}>
			{openModal && (
				<div>
					<button onClick={closeModal}> x </button>
					<div>~~~~~ 내용 ~~~~~</div>
				</div>
			)}
		</div>
	);
};

export default ModalContainer;
