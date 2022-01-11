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
					{children}
					<Button onClick={handleModal}> 취소 </Button>
					<Button
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							console.log("submit"); // 임시로 써놓은 거,,
						}}
					>
						수정
					</Button>
				</div>
			)}
		</Box>
	);
};

export default Modal;
