import { ReactChild, ReactChildren } from "react";

export interface ModalProps {
	showModal?: boolean;
	handleModal?: () => void;
	handleComplete?: any;
	cancelButton?: any;
	submitButton?: any;
	children?: ReactChild | ReactChildren;
}
