import React, { ReactChild, ReactChildren } from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";

interface ModalProps {
	showModal?: boolean;
	handleModal?: () => void;
	handleComplete?: any;
	cancelButton?: any;
	submitButton?: any;
	children?: ReactChild | ReactChildren;
}

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
