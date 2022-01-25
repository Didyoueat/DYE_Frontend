import React from "react";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import { ModalProps } from "@interfaces/modal.interface";

const Modal = ({
	showModal,
	handleModal,
	handleComplete,
	cancelButton,
	submitButton,
	children,
}: ModalProps) => {
	return (
		<Box type="modal">
			{showModal && (
				<div>
					{children}
					<Button onClick={handleModal}>{cancelButton}</Button>
					<Button onClick={handleComplete}>{submitButton}</Button>
				</div>
			)}
		</Box>
	);
};

export default Modal;
