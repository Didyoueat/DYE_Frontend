import React from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

export interface LabelInputProps {
	type?: any;
	id?: any;
	children?: any;
}

const LabelInput = ({ type, id, children }: LabelInputProps) => {
	return (
		<>
			<Label htmlFor={id}>{children}</Label>
			<Input type={type} id={id}></Input>
		</>
	);
};

export default LabelInput;
