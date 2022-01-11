import React from "react";
import Box from "../../atoms/Box";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

export interface LabelInputProps {
	width?: any;
	height?: any;
	label?: any;
	type?: any;
	id?: any;
	value?: any;
	onChange?: any;
	readonly?: any;
	children?: any;
}

const LabelInput = ({
	width,
	height,
	label,
	type,
	id,
	value,
	onChange,
	readonly,
	children,
}: LabelInputProps) => {
	return (
		<Box type="rowFlex">
			<Label htmlFor={id}>{label}</Label>
			<Input
				width={width}
				height={height}
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				readonly={readonly}
			></Input>
			{children}
		</Box>
	);
};

export default LabelInput;
