import React, {
	// MouseEvent,
	// MouseEventHandler,
	ReactChild,
	ReactChildren,
	// useState,
} from "react";
import { ModalWrapper } from "./ModalStyle";

type Props = {
	openModal: boolean;
	closeModal: () => void;
	children: ReactChild | ReactChildren;
};

export const Modal = (props: Props) => {
	const { openModal, closeModal, children } = props;
	// const [modalClicked, setModalClicked] = useState<boolean>(false);

	// const handleModalOff = (
	// 	e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
	// ) => {
	// 	const target = e.target as HTMLDivElement;
	// 	if ()
	// 	else closeModal();
	// };

	return (
		<ModalWrapper
			className={openModal ? "modalActive" : ""}
			// onClick={(e) => handleModalOff(e)}
		>
			{openModal && (
				<div>
					<button onClick={closeModal}> x </button>
					<div>{children}</div>
				</div>
			)}
		</ModalWrapper>
	);
};

export default Modal;
