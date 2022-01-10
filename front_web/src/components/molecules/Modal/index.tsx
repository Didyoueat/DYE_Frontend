import React, { ReactChild, ReactChildren } from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";

interface ModalProps {
	showModal: boolean;
	handleModal: () => void;
	children: ReactChild | ReactChildren;
}

const Modal = ({ showModal, handleModal, children }: ModalProps) => {
	return (
		<Box type="modal">
			{showModal && (
				<div>
					<Button onClick={handleModal}> x </Button>
					<div>{children}</div>
				</div>
			)}
		</Box>
	);
};

export default Modal;
