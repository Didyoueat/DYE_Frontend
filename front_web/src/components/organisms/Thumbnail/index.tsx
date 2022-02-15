import React from "react";
import { ModalProps } from "@interfaces/modal.interface";

export interface ThumbnailProps extends ModalProps {
	info: any;
}

const Thumbnail = ({ info, ...props }: ThumbnailProps) => {
	return <div></div>;
};
