import React from "react";

type Props = {
	openModal: boolean;
	closeModal: () => void;
};

export const Modal = (props: Props) => {
	const { openModal, closeModal } = props;

	return (
		<div className={openModal ? "modalActive" : ""}>
			{openModal && (
				<div>
					<button onClick={closeModal}> x </button>
					<div>모달창 테스트</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
