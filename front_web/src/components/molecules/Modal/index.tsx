import React from "react";
import Box from "@atoms/Box";
import Button from "@atoms/Button";
import { ModalProps } from "@interfaces/modal.interface";

const Modal = ({
	width,
	height,
	showModal,
	handleModal,
	handleComplete,
	cancelButton,
	submitButton,
	children,
}: ModalProps) => {
	return (
		<Box type="modal" width={width} height={height}>
			{showModal && (
				<div>
					{children}
					<Button type="modalLeft" onClick={handleModal}>
						{cancelButton}
					</Button>
					<Button type="modalRight" onClick={handleComplete}>
						{submitButton}
					</Button>
				</div>
			)}
		</Box>
	);
};

export default Modal;
