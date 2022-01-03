import React from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

export interface LabelInputProps {
	labelFor?: any;
	type?: any;
	id?: any;
	children?: any;
}

const LabelInput = ({ labelFor, type, id, children }: LabelInputProps) => {
	return (
		<>
			<Label for={labelFor}>{children}</Label>
			<Input type={type} id={id}></Input>
		</>
	);
};

export default LabelInput;
