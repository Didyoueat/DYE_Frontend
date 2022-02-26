import React from "react";
import Box from "@atoms/Box";
import Input from "@atoms/Input";
import Label from "@atoms/Label";

export interface LabelInputProps {
	width?: any;
	height?: any;
	background?: any;
	label?: any;
	type?: any;
	id?: any;
	value?: any;
	onChange?: any;
	readonly?: any;
	checked?: any;
	children?: any;
}

const LabelInput = ({
	width,
	height,
	background,
	label,
	type,
	id,
	value,
	onChange,
	readonly,
	checked,
	children,
}: LabelInputProps) => {
	return (
		<Box
			type="rowFlex"
			width={width}
			height={height}
			background={background}
		>
			<Label htmlFor={id}>{label}</Label>
			<Input
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				readonly={readonly}
				checked={checked}
			></Input>
			{children}
		</Box>
	);
};

export default LabelInput;
