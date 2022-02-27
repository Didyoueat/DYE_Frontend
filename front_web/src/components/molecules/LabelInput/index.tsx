import React from "react";
import Box from "@atoms/Box";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import Textarea from "@atoms/Textarea";

export interface LabelInputProps {
	width?: any;
	height?: any;
	background?: any;
	styleType?: any;
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
	styleType,
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
			background={styleType ? "#f5f4f2" : background}
			margin={styleType && "20px 0px"}
			flexAlign="flex-start"
		>
			<Label htmlFor={id}>{label}</Label>
			{styleType === "modalText" ? (
				<Textarea
					id={id}
					value={value}
					onChange={onChange}
					readonly={readonly}
				></Textarea>
			) : (
				<Input
					styleType={styleType}
					type={type}
					id={id}
					value={value}
					onChange={onChange}
					readonly={readonly}
					checked={checked}
				></Input>
			)}
			{children}
		</Box>
	);
};

export default LabelInput;
