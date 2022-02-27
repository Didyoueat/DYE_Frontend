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
				<Box type="colFlex" background="#f5f4f2">
					{children}
					<Box type="rowFlex" width="424px" background="#f5f4f2">
						<Button styleType="modalLeft" onClick={handleModal}>
							{cancelButton}
						</Button>
						<Button styleType="modalRight" onClick={handleComplete}>
							{submitButton}
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Modal;
